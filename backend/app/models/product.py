from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean
from sqlalchemy import Float

from ..database import Base


class Product(Base):

    __tablename__ = "products"

    id = Column(
        Integer,
        primary_key=True
    )

    name = Column(String)

    description = Column(String)

    price = Column(Float)

    image = Column(String)

    featured = Column(
        Boolean,
        default=False
    )