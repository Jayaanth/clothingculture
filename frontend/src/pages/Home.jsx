import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/hero/Hero";

import { useEffect } from "react";

import {
  useBranding
} from "../context/BrandingContext";

import BrandBanner from "../components/branding/BrandBanner";

export default function Home() {

  const {
    branding
  } = useBranding();

  useEffect(() => {

    document.title =
      "ClothingCulture";

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

      <Footer />

    </>

  );

}