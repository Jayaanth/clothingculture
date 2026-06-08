export default function SectionTitle({

  title,

  subtitle = "",

  align = "center"

}) {

  return (

    <div
      className={`
        section-title-wrapper
        section-title-${align}
      `}
    >

      <h2
        className="
        section-heading
        "
      >

        {title}

      </h2>

      {subtitle && (

        <p
          className="
          section-subtitle
          "
        >

          {subtitle}

        </p>

      )}

    </div>

  );

}