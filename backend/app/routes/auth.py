from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from ..database import get_db

from ..models.admin import Admin

from ..schemas.auth import LoginRequest

from ..utils.security import (
    verify_password,
    create_access_token
)

router = APIRouter()


@router.post("/login")
def login(
    data: LoginRequest,
    db: Session = Depends(get_db)
):

    admin = db.query(Admin)\
        .filter(
            Admin.username ==
            data.username
        ).first()

    if not admin:
        raise HTTPException(
            401,
            "Invalid credentials"
        )

    if not verify_password(
        data.password,
        admin.password
    ):
        raise HTTPException(
            401,
            "Invalid credentials"
        )

    token = create_access_token(
        {"sub": admin.username}
    )

    return {
    "access_token": token,
    "token_type": "bearer"
    }