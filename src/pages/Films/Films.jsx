import { useState } from "react";
import { useGetFilmsQuery } from "../../store/api/ghibliApi";
import Pagination from "../../components/common/Pagination/Pagination";
import FilmCard from "../../components/films/FilmCard/FilmCard.jsx";

function Films() {
  const { data: films, error, isLoading } = useGetFilmsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  if (isLoading) return <div>Loading films...</div>;
  if (error) return <div>Error loading films: {error.message}</div>;
  if (!films) return <div>No films found</div>;

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFilms = films.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <p>
        Total films: {films.length} | Showing {startIndex + 1}-
        {Math.min(endIndex, films.length)} of {films.length}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
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
        totalItems={films.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Films;
