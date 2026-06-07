import {
  useEffect,
  useState
} from "react";

import Navbar
from "../components/layout/Navbar";

import Footer
from "../components/layout/Footer";

import ProductGrid
from "../components/products/ProductGrid";

import {
  getProducts
} from "../api/productApi";

export default function Catalog() {

  const [products,
    setProducts] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {

    loadProducts();

  }, []);

  const loadProducts =
    async () => {

      try {

        const data =
          await getProducts();

        setProducts(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

  return (

    <>

      <Navbar />

      <section
        className="
        catalog-hero
        "
      >

        <div
          className="
          container
          "
        >

          <h1
            className="
            section-title
            gradient-text
            "
          >
            Our Collection
          </h1>

          <p
            className="
            catalog-subtitle
            "
          >
            Discover premium
            quality apparel
          </p>

        </div>

      </section>

      <section
        className="
        section
        "
      >

        <div
          className="
          container
          "
        >

          {loading && (

            <h2>
              Loading Products...
            </h2>

          )}

          {!loading &&
            products.length === 0 && (

            <div
              className="
              empty-state
              "
            >

              No Products Found

            </div>

          )}

          {!loading &&
            products.length > 0 && (

            <ProductGrid
              products={products}
            />

          )}

        </div>

      </section>

      <Footer />

    </>

  );

}