from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from ..database import Base


class Inquiry(Base):

    __tablename__ = "inquiries"

    id = Column(
        Integer,
        primary_key=True
    )

    name = Column(String)

    email = Column(String)

    phone = Column(String)

    message = Column(String)