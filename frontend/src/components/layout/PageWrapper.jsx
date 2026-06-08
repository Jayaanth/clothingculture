export default function PageWrapper({

  children,

  className = ""

}) {

  return (

    <main
      className={`
        page-wrapper
        ${className}
      `}
    >

      <div
        className="
        container
        "
      >

        {children}

      </div>

    </main>

  );

}