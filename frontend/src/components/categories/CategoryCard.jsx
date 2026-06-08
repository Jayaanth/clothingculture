export default function CategoryCard({
  category,
  onClick
}) {

  return (

    <div
      className="
      category-card
      hover-lift
      "
      onClick={() =>
        onClick?.(category)
      }
    >

      <div
        className="
        category-icon
        "
      >

        {category.name
          ?.charAt(0)
          ?.toUpperCase()}

      </div>

      <h3>

        {category.name}

      </h3>

      <p>

        Explore our
        {` ${category.name} `}
        collection

      </p>

    </div>

  );

}