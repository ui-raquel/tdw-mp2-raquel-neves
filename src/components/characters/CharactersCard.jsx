import { Link } from "react-router-dom";

function PeopleCard ({ people }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2
        style={{
          margin: "0 0 10px 0",
          color: "#2d3436",
        }}
      >
        {people.name}
        {people.classification !== people.name && ` (${people.gender})`}
      </h2>

      <div style={{ marginTop: "auto" }}>
        <Link className="viewDetailsButton" to={`/people/${people.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PeopleCard;
