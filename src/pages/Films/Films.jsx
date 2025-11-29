import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetFilmsQuery } from "../../store/api/ghibliApi";
import Pagination from "../../components/common/Pagination/Pagination";
import FilmCard from "../../components/films/FilmCard/FilmCard.jsx";
import FilmFilters from "../../components/films/FilmFilters/FilmFilters.jsx";
import FilmSearch from "../../components/films/FilmSearch/FilmSearch.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";
import { PageContainer } from "../../components/common/StyledComponents";


function Films() {
  const { data: films, error, isLoading } = useGetFilmsQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageParam);
  const [filters, setFilters] = useState(searchParams.get("filters") || "");
  const [sortOrder, setSortOrder] = useState(searchParams.get("sort") || "asc");
  const [search, setSearch] = useState(searchParams.get("search") || "");

  // keep state in sync when user navigates via URL (back/forward or direct link)
  useEffect(() => {
    const p = parseInt(searchParams.get("page")) || 1;
    const f = searchParams.get("filters") || "";
    const s = searchParams.get("sort") || "asc";
    const q = searchParams.get("search") || "";
    if (p !== currentPage) setCurrentPage(p);
    if (f !== filters) setFilters(f);
    if (s !== sortOrder) setSortOrder(s);
    if (q !== search) setSearch(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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
    // update URL
    const params = Object.fromEntries(searchParams.entries());
    params.page = String(page);
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (newFilter) => {
    setFilters(newFilter);
    setCurrentPage(1); // Reset to first page when filter changes
    const params = Object.fromEntries(searchParams.entries());
    if (newFilter) {
      params.filters = newFilter;
    } else {
      delete params.filters;
    }
    params.page = "1";
    setSearchParams(params);
  };

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    setCurrentPage(1);
    const params = Object.fromEntries(searchParams.entries());
    if (newSearch && newSearch.trim().length) {
      params.search = newSearch;
    } else {
      delete params.search;
    }
    params.page = "1";
    setSearchParams(params);
  };

  const handleSortOrderChange = (newSort) => {
    setSortOrder(newSort);
    setCurrentPage(1);
    const params = Object.fromEntries(searchParams.entries());
    if (newSort) {
      params.sort = newSort;
    } else {
      delete params.sort;
    }
    params.page = "1";
    setSearchParams(params);
  };




  return (
    <PageContainer>
      <h1>Studio Ghibli Films</h1>
      
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap", justifyContent: "space-between" }}>

        <FilmSearch 
          search={search} 
          onSearchChange={handleSearchChange} 
        />

        <FilmFilters 
          filters={filters} 
          onFilterChange={handleFilterChange}
          sortOrder={sortOrder}
          onSortOrderChange={handleSortOrderChange}
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
    </PageContainer>
  );
}

export default Films;
