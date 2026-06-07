import {
  useBranding
} from "../../context/BrandingContext";

export default function BrandBanner() {

  const {
    branding
  } = useBranding();

  if (!branding) {
    return null;
  }

  return (

    <section
      className="brand-banner"
    >

      <div
        className="
        container
        brand-banner-content
        "
      >

        <div
          className="
          brand-banner-left
          "
        >

          {branding.logo && (

            <img
              src={`${import.meta.env.VITE_API_BASE}${branding.logo}`}
              alt="ClothingCulture"
              className="
              brand-banner-logo
              "
            />

          )}

        </div>

        <div
          className="
          brand-banner-right
          "
        >

          <h2>

            {
              branding.hero_title
            }

          </h2>

          <p>

            {
              branding.hero_subtitle
            }

          </p>

        </div>

      </div>

    </section>

  );

}