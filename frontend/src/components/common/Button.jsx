export default function Button({

  children,

  onClick,

  type = "button",

  variant = "primary",

  size = "md",

  loading = false,

  disabled = false,

  fullWidth = false,

  icon = null,

  className = ""

}) {

  return (

    <button

      type={type}

      onClick={onClick}

      disabled={
        disabled || loading
      }

      className={`
        btn
        btn-${variant}
        btn-${size}
        ${fullWidth ? "btn-full" : ""}
        ${loading ? "btn-loading" : ""}
        ${className}
      `}

    >

      {loading ? (

        <span
          className="
          btn-spinner
          "
        />

      ) : (

        <>
          {icon}
          {children}
        </>

      )}

    </button>

  );

}