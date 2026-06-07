export default function StatCard({
  title,
  value,
  icon,
  color = "#D60000"
}) {

  return (

    <div
      className="stat-card"
    >

      <div
        className="stat-card-top"
      >

        <div
          className="stat-card-icon"
          style={{
            background: color
          }}
        >

          {icon}

        </div>

      </div>

      <h3
        className="stat-card-title"
      >

        {title}

      </h3>

      <h2
        className="stat-card-value"
      >

        {value}

      </h2>

    </div>

  );

}