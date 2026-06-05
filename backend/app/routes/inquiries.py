from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from ..database import get_db

from ..models.inquiry import Inquiry

from ..schemas.inquiry import (
    InquiryCreate
)

from ..utils.auth import (
    get_current_admin
)

router = APIRouter()

@router.post("/inquiries")
def create_inquiry(
    inquiry: InquiryCreate,
    db: Session = Depends(get_db)
):

    item = Inquiry(
        **inquiry.model_dump()
    )

    db.add(item)

    db.commit()

    db.refresh(item)

    return item

@router.get("/inquiries")
def get_inquiries(
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin)
):

    return db.query(
        Inquiry
    ).all()

@router.get(
    "/inquiries/{inquiry_id}"
)
def get_inquiry(
    inquiry_id: int,
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin)
):

    inquiry = db.query(
        Inquiry
    ).filter(
        Inquiry.id == inquiry_id
    ).first()

    if not inquiry:

        raise HTTPException(
            status_code=404,
            detail="Inquiry not found"
        )

    return inquiry

@router.delete(
    "/inquiries/{inquiry_id}"
)
def delete_inquiry(
    inquiry_id: int,
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin)
):

    inquiry = db.query(
        Inquiry
    ).filter(
        Inquiry.id == inquiry_id
    ).first()

    if not inquiry:

        raise HTTPException(
            status_code=404,
            detail="Inquiry not found"
        )

    db.delete(inquiry)

    db.commit()

    return {
        "message":
        "Inquiry deleted"
    }