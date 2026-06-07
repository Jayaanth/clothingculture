import Navbar
from "../components/layout/Navbar";

import Footer
from "../components/layout/Footer";

export default function About() {

  return (

    <>

      <Navbar />

      <section
        className="about-hero"
      >

        <div
          className="container"
        >

          <span
            className="hero-badge"
          >
            About ClothingCulture
          </span>

          <h1
            className="
            section-title
            gradient-text
            "
          >
            Premium Apparel.
            Trusted Sourcing.
          </h1>

          <p
            className="
            about-intro
            "
          >
            We help customers
            access premium quality
            branded apparel sourced
            with a strong focus on
            quality, value and trust.
          </p>

        </div>

      </section>

      <section
        className="section"
      >

        <div
          className="
          container
          about-grid
          "
        >

          <div
            className="
            about-card
            hover-lift
            "
          >

            <h3>
              Quality First
            </h3>

            <p>
              Every product is
              selected with
              quality as the
              highest priority.
              We focus on fabric,
              finish, durability
              and comfort.
            </p>

          </div>

          <div
            className="
            about-card
            hover-lift
            "
          >

            <h3>
              Trusted Sourcing
            </h3>

            <p>
              We carefully source
              products from trusted
              channels to ensure
              customers receive
              apparel that meets
              expectations.
            </p>

          </div>

          <div
            className="
            about-card
            hover-lift
            "
          >

            <h3>
              Customer Focused
            </h3>

            <p>
              We believe long-term
              relationships are
              built through trust,
              transparency and
              consistent quality.
            </p>

          </div>

        </div>

      </section>

      <section
        className="
        section
        mission-section
        "
      >

        <div
          className="container"
        >

          <h2
            className="
            section-title
            "
          >
            Our Mission
          </h2>

          <p
            className="
            mission-text
            "
          >
            To make premium quality
            apparel more accessible
            by combining reliable
            sourcing, quality
            assurance and excellent
            customer experience.
          </p>

        </div>

      </section>

      <section
        className="
        section
        process-section
        "
      >

        <div
          className="container"
        >

          <h2
            className="
            section-title
            "
          >
            How We Work
          </h2>

          <div
            className="
            process-grid
            "
          >

            <div
              className="
              process-card
              "
            >
              <span>01</span>
              <h3>
                Source
              </h3>
              <p>
                Carefully selected
                apparel from trusted
                channels.
              </p>
            </div>

            <div
              className="
              process-card
              "
            >
              <span>02</span>
              <h3>
                Verify
              </h3>
              <p>
                Quality checks for
                fabric, finish and
                consistency.
              </p>
            </div>

            <div
              className="
              process-card
              "
            >
              <span>03</span>
              <h3>
                Deliver
              </h3>
              <p>
                Products reach
                customers with
                confidence and
                transparency.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}