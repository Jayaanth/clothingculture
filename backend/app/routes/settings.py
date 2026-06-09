import os
from dotenv import load_dotenv

load_dotenv()

import shutil

from fastapi import APIRouter, UploadFile, File

router = APIRouter()

UPLOAD_DIR = "app/uploads"


@router.post("/logo")
def upload_logo(file: UploadFile = File(...)):

    os.makedirs(UPLOAD_DIR, exist_ok=True)

    filepath = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    return {
        "message": "Logo uploaded",
        "path": filepath
    }


@router.get("/logo")
def get_logo():

    files = os.listdir(UPLOAD_DIR)

    if not files:
        return {
            "logo": None
        }

    return {
        "logo": f"/uploads/{files[0]}"
    }