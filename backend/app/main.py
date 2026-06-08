from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from fastapi.staticfiles import StaticFiles

import os

from .database import Base
from .database import engine
from .database import SessionLocal

from .models.admin import Admin
from .models.product import Product
from .models.category import Category
from .models.branding import Branding
from .models.inquiry import Inquiry

from .utils.security import hash_password

from .routes.auth import router as auth_router
from .routes.products import router as product_router
from .routes.categories import router as category_router
from .routes.uploads import router as upload_router
from .routes.branding import router as branding_router
from .routes.inquiries import router as inquiry_router
from .routes.dashboard import router as dashboard_router


Base.metadata.create_all(
    bind=engine
)

# Create default admin if missing

db = SessionLocal()

admin = db.query(Admin).filter(
    Admin.username == "admin"
).first()

if not admin:

    db.add(
        Admin(
            username="Admin",
            password=hash_password("Annexure")
        )
    )

    db.commit()

db.close()

# Ensure uploads folder exists

os.makedirs(
    "app/uploads",
    exist_ok=True
)

app = FastAPI(
    title="ClothingCulture API",
    swagger_ui_parameters={
        "persistAuthorization": True
    }
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount(
    "/uploads",
    StaticFiles(
        directory="app/uploads"
    ),
    name="uploads"
)

app.include_router(
    auth_router,
    prefix="/api"
)

app.include_router(
    upload_router,
    prefix="/api",
    tags=["Uploads"]
)

app.include_router(
    product_router,
    prefix="/api"
)

app.include_router(
    category_router,
    prefix="/api"
)

app.include_router(
    branding_router,
    prefix="/api",
    tags=["Branding"]
)

app.include_router(
    inquiry_router,
    prefix="/api",
    tags=["Inquiries"]
)

app.include_router(
    dashboard_router,
    prefix="/api",
    tags=["Dashboard"]
)

@app.get("/")
def root():

    return {
        "status": "running"
    }

@app.get("/health")
def health():

    return {
        "status": "ok"
    }