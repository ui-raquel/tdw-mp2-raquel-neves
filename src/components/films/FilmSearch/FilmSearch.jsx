function FilmSearch({ search, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        id="search"
        className="searchBox"
        placeholder="Search films by title..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button
        onClick={() => onSearchChange(search)}
        style={{ borderColor: "rgb(118, 75, 162, 0.3)"}}
      >
        <i style={{
          color: "rgb(118, 75, 162)"
        }} className="bi bi-search"></i>
      </button>
    </div>
  );
}

export default FilmSearch;