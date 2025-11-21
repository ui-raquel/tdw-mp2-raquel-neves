import { Link } from "react-router-dom";

function FilmCard({ film }) {
  return (
    <div className="card">
      <img
        src={film.image}
        alt={film.title}
        style={{
          width: "60%",
          height: "60%",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "15px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onError={(e) => {
          e.target.src = "/placeholder-image.jpg";
        }}
      />

      <h2
        style={{
          margin: "0 0 10px 0",
          color: "#2d3436",
        }}
      >
        {film.title}
      </h2>

      <div style={{ flex: 1 }}>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong>Director:</strong> {film.director}
        </p>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong>Year:</strong> {film.release_date}
        </p>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong>Rating:</strong> ⭐ {film.rt_score}/100
        </p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <Link className="viewDetailsButton" to={`/films/${film.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default FilmCard;
