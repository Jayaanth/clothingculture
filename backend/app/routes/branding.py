from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from ..database import get_db

from ..models.branding import Branding

from ..schemas.branding import (
    BrandingUpdate
)

from ..utils.auth import (
    get_current_admin
)

router = APIRouter()

@router.get("/branding")
def get_branding(
    db: Session = Depends(get_db)
):

    branding = db.query(
        Branding
    ).first()

    if not branding:

        branding = Branding(
            logo="",
            hero_title="Premium Brand Apparel",
            hero_subtitle="Sourcing Best Quality Brand Clothes",
            whatsapp="",
            instagram="",
            email="",
            primary_color="#D60000",
            secondary_color="#FFFFFF"
        )

        db.add(branding)

        db.commit()

        db.refresh(branding)

    return branding

@router.put("/branding")
def update_branding(
    data: BrandingUpdate,
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin)
):

    branding = db.query(
        Branding
    ).first()

    if not branding:

        branding = Branding()

        db.add(branding)

    branding.logo = data.logo

    branding.hero_title = data.hero_title

    branding.hero_subtitle = (
        data.hero_subtitle
    )

    branding.whatsapp = (
        data.whatsapp
    )

    branding.instagram = (
        data.instagram
    )

    branding.email = (
        data.email
    )

    branding.primary_color = (
        data.primary_color
    )

    branding.secondary_color = (
        data.secondary_color
    )

    db.commit()

    db.refresh(branding)

    return branding