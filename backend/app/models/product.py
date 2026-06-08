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