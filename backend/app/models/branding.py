from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from ..database import Base


class Branding(Base):

    __tablename__ = "branding"

    id = Column(
        Integer,
        primary_key=True
    )

    logo = Column(String)

    hero_title = Column(String)

    hero_subtitle = Column(String)

    whatsapp = Column(String)

    instagram = Column(String)

    email = Column(String)

    primary_color = Column(String)

    secondary_color = Column(String)