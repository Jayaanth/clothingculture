import os
import uuid

from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File
from fastapi import Depends

from ..utils.auth import get_current_admin

from fastapi import HTTPException

router = APIRouter()

UPLOAD_DIR = "app/uploads/products"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)


@router.post("/upload/product-image")
async def upload_product_image(
    file: UploadFile = File(...),
    admin=Depends(get_current_admin)
):

    extension = file.filename.split(".")[-1]

    allowed = [
        "jpg",
        "jpeg",
        "png",
        "webp"
    ]

    if extension.lower() not in allowed:
        raise HTTPException(
            status_code=400,
            detail="Invalid file type"
        )

    filename = f"{uuid.uuid4()}.{extension}"

    filepath = os.path.join(
        UPLOAD_DIR,
        filename
    )

    with open(filepath, "wb") as buffer:
        buffer.write(
            await file.read()
        )

    return {
        "image_url":
        f"/uploads/products/{filename}"
    }

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