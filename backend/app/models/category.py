from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from ..database import Base


class Category(Base):

    __tablename__ = "categories"

    id = Column(
        Integer,
        primary_key=True
    )

    name = Column(String)

    image = Column(String)