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
      
      <div style={{ flex: 1, alignContent: 'center', textAlign: 'left' }}>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong><i className="bi bi-eye"></i> Eye Color:</strong> {people.eye_color}
        </p>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong><i className="bi bi-palette"></i> Hair Color:</strong> {people.hair_color}
        </p>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong><i className="bi bi-cake2"></i> Age:</strong> {people.age}
        </p>
      </div>
    </div>
  );
}

export default PeopleCard;
