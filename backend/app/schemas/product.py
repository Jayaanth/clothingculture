from pydantic import BaseModel


class ProductCreate(BaseModel):

    name: str
    description: str
    price: str
    image: str
    featured: bool = False


class ProductResponse(ProductCreate):

    id: int

    class Config:
        from_attributes = True