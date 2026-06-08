import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/hero/Hero";
import BrandBanner from "../components/branding/BrandBanner";
import FeaturedProducts from "../components/products/FeaturedProducts";

import {
  useEffect,
  useState
} from "react";

import {
  getProducts
} from "../api/productApi";

import {
  useBranding
} from "../context/BrandingContext";

export default function Home() {

  const {
    branding
  } = useBranding();

  const [
    products,
    setProducts
  ] = useState([]);

  const [
    loadingProducts,
    setLoadingProducts
  ] = useState(true);

  useEffect(() => {

    document.title =
      "ClothingCulture";

    getProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() =>
        setLoadingProducts(
          false
        )
      );

  }, []);

  return (

    <>

      <Navbar />

      <Hero />

      <section
        className="section"
      >

        <div
          className="container"
        >

          <h2
            className="section-title"
          >
            Why ClothingCulture?
          </h2>

          <div
            className="feature-grid"
          >

            <div
              className="
              feature-card
              hover-lift
              "
            >
              Premium Quality
            </div>

            <div
              className="
              feature-card
              hover-lift
              "
            >
              Trusted Sourcing
            </div>

            <div
              className="
              feature-card
              hover-lift
              "
            >
              Best Value
            </div>

          </div>

        </div>

      </section>

      <BrandBanner />

      <FeaturedProducts
        products={products}
        loading={loadingProducts}
      />

      <Footer />

    </>

  );

}