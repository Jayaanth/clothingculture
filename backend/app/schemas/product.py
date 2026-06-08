class ProductCreate(BaseModel):

    name: str
    description: str
    price: str
    image: str
    featured: bool = False