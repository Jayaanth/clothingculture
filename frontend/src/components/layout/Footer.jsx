import {
  Link
} from "react-router-dom";

import {
  useBranding
} from "../../context/BrandingContext";

export default function Footer() {

  const {
    branding
  } = useBranding();

  const year =
    new Date().getFullYear();

  return (

    <footer
      className="footer"
    >

      <div
        className="
        container
        footer-container
        "
      >

        <div
          className="footer-brand"
        >

          <h2>
            ClothingCulture
          </h2>

          <p>
            {
              branding?.hero_subtitle
            }
          </p>

        </div>

        <div
          className="footer-links"
        >

          <h4>
            Navigation
          </h4>

          <Link to="/">
            Home
          </Link>

          <Link to="/catalog">
            Catalog
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

        <div
          className="footer-contact"
        >

          <h4>
            Contact
          </h4>

          {branding?.email && (

            <a
              href={`mailto:${branding.email}`}
            >
              {branding.email}
            </a>

          )}

          {branding?.whatsapp && (

            <a
              href={`https://wa.me/${branding.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

          )}

          {branding?.instagram && (

            <a
              href={branding.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

          )}

        </div>

      </div>

      <div
        className="footer-bottom"
      >

        © {year}
        {" "}
        ClothingCulture.
        All Rights Reserved.

      </div>

    </footer>

  );

}