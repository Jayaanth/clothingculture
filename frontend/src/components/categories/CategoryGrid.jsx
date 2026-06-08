import CategoryCard from "./CategoryCard";

export default function CategoryGrid({
  categories = [],
  loading = false,
  title = "Categories"
}) {

  if (loading) {

    return (

      <section
        className="section"
      >

        <div
          className="container"
        >

          <h2
            className="
            section-title
            "
          >
            {title}
          </h2>

          <div
            className="
            category-loading
            "
          >
            Loading Categories...
          </div>

        </div>

      </section>

    );

  }

  if (
    !categories ||
    categories.length === 0
  ) {

    return (

      <section
        className="section"
      >

        <div
          className="container"
        >

          <h2
            className="
            section-title
            "
          >
            {title}
          </h2>

          <div
            className="
            category-empty
            "
          >
            No Categories Found
          </div>

        </div>

      </section>

    );

  }

  return (

    <section
      className="section"
    >

      <div
        className="container"
      >

        <h2
          className="
          section-title
          "
        >
          {title}
        </h2>

        <div
          className="
          category-grid
          "
        >

          {categories.map(
            (category) => (

              <CategoryCard
                key={category.id}
                category={category}
              />

            )
          )}

        </div>

      </div>

    </section>

  );

}