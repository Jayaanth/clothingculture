from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean

from ..database import Base
from sqlalchemy import Float



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

    category_id = Column(Integer)