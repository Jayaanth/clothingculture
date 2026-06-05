from jose import JWTError, jwt

from fastapi import Depends
from fastapi import HTTPException
from fastapi.security import HTTPBearer
from fastapi.security import HTTPAuthorizationCredentials

from sqlalchemy.orm import Session

from ..database import get_db
from ..models.admin import Admin
from .security import SECRET_KEY, ALGORITHM

security = HTTPBearer()


def get_current_admin(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):

    token = credentials.credentials

    try:

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        username = payload.get("sub")

        if username is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )

    except JWTError:

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    admin = db.query(Admin)\
        .filter(
            Admin.username == username
        ).first()

    if not admin:
        raise HTTPException(
            status_code=401,
            detail="Admin not found"
        )

    return admin