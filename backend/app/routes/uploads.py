import os
import uuid

from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File
from fastapi import Depends

from ..utils.auth import get_current_admin

router = APIRouter()


@router.post("/upload/logo")
async def upload_logo(
    file: UploadFile = File(...),
    admin=Depends(get_current_admin)
):

    upload_dir = (
        "app/uploads/logo"
    )

    os.makedirs(
        upload_dir,
        exist_ok=True
    )

    filename = (
        f"{uuid.uuid4()}_"
        f"{file.filename}"
    )

    file_path = (
        f"{upload_dir}/"
        f"{filename}"
    )

    with open(
        file_path,
        "wb"
    ) as buffer:

        buffer.write(
            await file.read()
        )

    return {
        "file_url":
        f"/uploads/logo/{filename}"
    }