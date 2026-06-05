import { motion } from "framer-motion";
import {
  FaTshirt,
  FaShippingFast,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { getBranding } from "../services/branding";

export default function Home() {
  const products = [
    {
      name: "Oversized Tees",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      name: "Henleys",
      image:
        "https://images.unsplash.com/photo-1516826957135-700dedea698c"
    },
    {
      name: "Full Sleeves",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
    }
  ];

  return (
    <>
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Premium Brand Apparel
          </h1>

          <p>
            Sourcing the best quality
            branded clothing for modern wardrobes.
          </p>

          <div className="hero-buttons">
            <button>
              Browse Collection
            </button>

            <button className="secondary">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>

      <section className="features">
        <div className="feature-card">
          <FaTshirt />
          <h3>Premium Clothing</h3>
        </div>

        <div className="feature-card">
          <FaShippingFast />
          <h3>Fast Delivery</h3>
        </div>

        <div className="feature-card">
          <FaCheckCircle />
          <h3>Verified Quality</h3>
        </div>
      </section>

      <section className="products">
        <h2>Popular Categories</h2>

        <div className="product-grid">
          {products.map((item) => (
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              key={item.name}
              className="product-card"
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>
          Need Bulk Brand Clothing?
        </h2>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
        >
          <FaWhatsapp />
          Contact on WhatsApp
        </a>
      </section>
    </>
  );
}

export default function Home() {

  const [branding, setBranding] =
    useState(null);

  useEffect(() => {

    const loadBranding =
      async () => {

        const data =
          await getBranding();

        setBranding(data);
      };

    loadBranding();

  }, []);

  if (!branding) {
    return <div>Loading...</div>;
  }

  return (
    <section className="hero">

      <h1>
        {branding.hero_title}
      </h1>

      <p>
        {branding.hero_subtitle}
      </p>

    </section>
  );
}