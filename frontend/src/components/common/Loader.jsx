export default function Loader({

  text = "Loading...",

  fullScreen = false

}) {

  return (

    <div
      className={
        fullScreen
          ? "loader-container fullscreen-loader"
          : "loader-container"
      }
    >

      <div
        className="loader-spinner"
      />

      <p
        className="loader-text"
      >
        {text}
      </p>

    </div>

  );

}