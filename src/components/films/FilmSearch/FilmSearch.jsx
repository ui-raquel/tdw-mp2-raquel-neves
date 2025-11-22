function FilmSearch({ search, onSearchChange }) {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "14px",
          marginLeft: "10px"
        }}
      />

      { search && (
        <button
          onClick={() => onSearchChange("")}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default FilmSearch;