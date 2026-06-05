from app.database import SessionLocal

from app.models.admin import Admin

from app.utils.security import (
    hash_password
)

db = SessionLocal()

admin = Admin(
    username="admin",
    password=hash_password(
        "Ab"
    )
)

db.add(admin)

db.commit()

print("Admin Created")