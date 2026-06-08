from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from ..database import get_db

from ..models.product import Product
from ..models.inquiry import Inquiry

from ..utils.auth import (
    get_current_admin
)

router = APIRouter()

@router.get("/dashboard")
def get_dashboard_stats(
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin)
):

    total_products = db.query(
        Product
    ).count()

    

    total_inquiries = db.query(
        Inquiry
    ).count()

    featured_products = db.query(
        Product
    ).filter(
        Product.featured == True
    ).count()

    recent_products = db.query(
        Product
    ).order_by(
        Product.id.desc()
    ).limit(5).all()

    recent_inquiries = db.query(
        Inquiry
    ).order_by(
        Inquiry.id.desc()
    ).limit(5).all()

    return {

        "stats": {

            "products":
                total_products,

            

            "inquiries":
                total_inquiries,

            "featured_products":
                featured_products

        },

        "recent_products":
            recent_products,

        "recent_inquiries":
            recent_inquiries
    }