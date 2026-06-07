import { motion } from "framer-motion";

import {
  useBranding
} from "../../context/BrandingContext";

export default function Hero() {

  const {
    branding
  } = useBranding();

  return (

    <section
      className="hero"
    >

      <div
        className="
        container
        hero-container
        "
      >

        <motion.div
          initial={{
            opacity:0,
            y:40
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:.8
          }}
        >

          <span
            className="
            hero-badge
            "
          >
            Premium Apparel
          </span>

          <h1
            className="
            hero-title
            "
          >
            {
              branding?.hero_title
            }
          </h1>

          <p
            className="
            hero-subtitle
            "
          >
            {
              branding?.hero_subtitle
            }
          </p>

          <div
            className="
            hero-actions
            "
          >

            <a
              href="/catalog"
              className="
              hero-btn
              "
            >
              Explore Collection
            </a>

            <a
              href="/contact"
              className="
              hero-btn-outline
              "
            >
              Contact Us
            </a>

          </div>

        </motion.div>

        <div
          className="
          hero-visual
          "
        >

          <div
            className="
            floating-card
            "
          >
            Premium Quality
          </div>

          <div
            className="
            floating-card
            "
          >
            Brand Collection
          </div>

          <div
            className="
            floating-card
            "
          >
            Trusted Sourcing
          </div>

        </div>

      </div>

    </section>

  );

}