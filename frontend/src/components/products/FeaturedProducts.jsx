import ProductCard from "./ProductCard";

import SectionTitle from
"../common/SectionTitle";

import Loader from
"../common/Loader";

export default function FeaturedProducts({

  products = [],

  loading = false,

  title = "Featured Collection",

  subtitle =
    "Premium apparel curated for style, comfort and quality."

}) {

  if (loading) {

    return (

      <section
        className="section"
      >

        <div
          className="container"
        >

          <SectionTitle
            title={title}
            subtitle={subtitle}
          />

          <Loader
            text="Loading Products..."
          />

        </div>

      </section>

    );

  }

  if (
    !products ||
    products.length === 0
  ) {

    return (

      <section
        className="section"
      >

        <div
          className="container"
        >

          <SectionTitle
            title={title}
            subtitle={subtitle}
          />

          <div
            className="
            products-empty
            "
          >

            No products available

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

        <SectionTitle
          title={title}
          subtitle={subtitle}
        />

        <div
          className="
          featured-products-grid
          "
        >

          {products
            .slice(0, 8)
            .map(
              (product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              )
            )}

        </div>

      </div>

    </section>

  );

}