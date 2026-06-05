from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from ..database import get_db

from ..models.category import Category

from ..schemas.category import (
    CategoryCreate
)

from ..utils.auth import get_current_admin
from ..models.admin import Admin

router = APIRouter()


@router.get("/categories")
def get_categories(
    db: Session = Depends(get_db)
):
    return db.query(Category).all()


@router.post("/categories")
def add_category(
    category: CategoryCreate,
    db: Session = Depends(get_db),
    admin: Admin = Depends(get_current_admin)
):

    item = Category(
        **category.model_dump()
    )

    db.add(item)

    db.commit()

    db.refresh(item)

    return item