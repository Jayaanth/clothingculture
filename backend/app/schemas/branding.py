from pydantic import BaseModel


class BrandingUpdate(BaseModel):

    logo: str | None = None

    hero_title: str

    hero_subtitle: str

    whatsapp: str

    instagram: str

    email: str

    primary_color: str

    secondary_color: str


class BrandingResponse(
    BrandingUpdate
):
    id: int

    class Config:
        from_attributes = True