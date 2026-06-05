from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from ..database import get_db

from ..models.product import Product

from ..schemas.product import (
    ProductCreate
)

from ..utils.auth import get_current_admin
from ..models.admin import Admin


router = APIRouter()


@router.get("/products")
def get_products(
    db: Session = Depends(get_db)
):
    return db.query(Product).all()


@router.post("/products")
def create_product(
    product: ProductCreate,
    db: Session = Depends(get_db),
    admin: Admin = Depends(get_current_admin)
):

    item = Product(
        **product.model_dump()
    )

    db.add(item)

    db.commit()

    db.refresh(item)

    return item


@router.delete("/products/{product_id}")
def delete_product(
    product_id: int,
    db: Session = Depends(get_db),
    admin: Admin = Depends(get_current_admin)
):
    item = db.query(Product)\
        .filter(
            Product.id == product_id
        ).first()

    db.delete(item)

    db.commit()

    return {
        "message": "deleted"
    }