import { useState } from "react";
import { useGetFilmsQuery } from "../../store/api/ghibliApi";
import Pagination from "../../components/common/Pagination/Pagination";
import FilmCard from "../../components/films/FilmCard/FilmCard.jsx";
import FilmFilters from "../../components/films/FilmFilters/FilmFilters.jsx";
import FilmSearch from "../../components/films/FilmSearch/FilmSearch.jsx";

function Films() {
  const { data: films, error, isLoading } = useGetFilmsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");

  if (isLoading) return <div>Loading films...</div>;
  if (error) return <div>Error loading films: {error.message}</div>;
  if (!films) return <div>No films found</div>;

  let processedFilms = [...films];
  
  if (filters) {
    processedFilms.sort((a, b) => {
      let aValue = a[filters];
      let bValue = b[filters];
      

      if (filters === "rt_score") {
        aValue = parseInt(a[filters]);
        bValue = parseInt(b[filters]);
      } else if (filters === "release_date") {
        aValue = parseInt(a[filters]);
        bValue = parseInt(b[filters]);
      }
      
      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }

  if (search) {
    processedFilms = processedFilms.filter((film) =>
      film.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  const itemsPerPage = 12;


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFilms = processedFilms.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (newFilter) => {
    setFilters(newFilter);
    setCurrentPage(1); // Reset to first page when filter changes
  };


  return (
    <div style={{ padding: "40px", maxWidth: "100%", margin: "0 auto" }}>
      <h1>Studio Ghibli Films</h1>
      
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap", justifyContent: "space-between" }}>

        <FilmSearch 
        search={search} 
        onSearchChange={setSearch} 
        />

        <FilmFilters 
          filters={filters} 
          onFilterChange={handleFilterChange}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
        />
      </div>
      
      <p>
        Total films: {processedFilms.length} | Showing {startIndex + 1}-
        {Math.min(endIndex, processedFilms.length)} of {processedFilms.length}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          width: "100%",
          marginBottom: "30px",
        }}
      >
        {currentFilms.map((film) => (
          <FilmCard key={film.id} film={film} /> 
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={processedFilms.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Films;
