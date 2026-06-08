import {
  useBranding
} from "../../context/BrandingContext";

export default function BrandBanner() {

  const {
    branding
  } = useBranding();

  const FILE_BASE =
    import.meta.env
      .VITE_API_BASE
      .replace("/api", "");

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
              src={
                `${FILE_BASE}${branding.logo}`
              }
              alt="ClothingCulture"
              className="
              brand-banner-logo
              "
              onError={(e) => {
                e.target.style.display =
                  "none";
              }}
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