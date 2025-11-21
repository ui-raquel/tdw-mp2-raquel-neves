import { Link } from "react-router-dom";

function SpeciesCard({ species }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.3",
        borderRadius: "12px",
        padding: "20px",
        background: "rgba(255,255,255,0.4)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        marginTop: "40px",
      }}
    >
      <h2
        style={{
          margin: "0 0 10px 0",
          color: "#2d3436",
        }}
      >
        {species.name}
      </h2>

      <div style={{ flex: 1 }}>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong>Classification:</strong> {species.classification}
        </p>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong>Eye Colors:</strong> {species.eye_colors}
        </p>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong>Hair Colors:</strong> {species.hair_colors}
        </p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <Link
          to={`/species/${species.id}`}
          style={{
            display: "block",
            textAlign: "center",
            padding: "10px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default SpeciesCard;
