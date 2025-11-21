import { Link } from "react-router-dom";

function SpeciesCard({ species }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2
        style={{
          margin: "0 0 10px 0",
          color: "#2d3436",
        }}
      >
        {species.name}
        {species.classification !== species.name && ` (${species.classification})`}
      </h2>

      <div style={{ marginTop: "auto" }}>
        <Link className="viewDetailsButton" to={`/species/${species.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default SpeciesCard;
