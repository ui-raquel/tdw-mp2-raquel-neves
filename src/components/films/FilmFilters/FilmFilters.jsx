import { Link } from "react-router-dom";

function FilmFilters({ filters, onFilterChange, sortOrder, onSortOrderChange }) {
  return (
    <div style={{ 
      marginBottom: "20px", 
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap"
    }}>
      <div>
        <label htmlFor="filter" style={{ marginRight: "10px" }}>
          Sort by:
        </label>
        <select
          id="filter"
          value={filters}
          onChange={(e) => onFilterChange(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        >
          <option value="">None (Original Order)</option>
          <option value="director">Director</option>
          <option value="release_date">Release Year</option>
          <option value="rt_score">Rating</option>
        </select>
      </div>
      
      {filters && (
        <div>
          <label htmlFor="order" style={{ marginRight: "10px" }}>
            Order:
          </label>
          <select
            id="order"
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "6px", 
              border: "1px solid #ccc",
              fontSize: "14px"
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default FilmFilters;