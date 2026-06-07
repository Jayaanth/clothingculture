export default function ProductCard({
  product
}) {

  const imageUrl =
    product.image
      ? product.image
      : "/logo.svg";

  return (

    <div
      className="
      product-card
      hover-lift
      "
    >

      <img
        src={imageUrl}
        alt={product.name}
        className="
        product-image
        "
      />

      <div
        className="
        product-content
        "
      >

        <h3>
          {product.name}
        </h3>

        <p>
          {
            product.description
          }
        </p>

        <span
          className="
          product-price
          "
        >
          ₹{product.price}
        </span>

      </div>

    </div>

  );

}