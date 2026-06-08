export default function ProductCard({
  product
}) {

  const FILE_BASE =
    import.meta.env
      .VITE_API_BASE
      .replace("/api", "");

  const imageUrl =
    product.image
      ? `${FILE_BASE}${product.image}`
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
        onError={(e) => {
          e.target.src =
            "/logo.svg";
        }}
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
          {product.description}
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