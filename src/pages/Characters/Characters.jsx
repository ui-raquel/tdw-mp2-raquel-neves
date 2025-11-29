import { useGetPeopleQuery } from "../../store/api/ghibliApi";
import Pagination from "../../components/common/Pagination/Pagination";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PeopleCard from "../../components/characters/CharactersCard.jsx";

function Characters() {
  const { data: people, error, isLoading } = useGetPeopleQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageParam);
  const itemsPerPage = 20;

  useEffect(() => {
    const p = parseInt(searchParams.get("page")) || 1;
    if (p !== currentPage) setCurrentPage(p);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (isLoading) return <div>Loading characters...</div>;
  if (error) return <div>Error loading characters: {error.message}</div>;
  if (!people) return <div>No characters found</div>;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPeople = people.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const params = Object.fromEntries(searchParams.entries());
    params.page = String(page);
    setSearchParams(params);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h1>Studio Ghibli Characters</h1>
      <p>
        Total characters: {people.length} | Showing {startIndex + 1}-
        {Math.min(endIndex, people.length)} of {people.length}
      </p>
      <section
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "25px",
            width: "100%",
            marginBottom: "30px",
            alignItems: "end",
          }}>
            
        {currentPeople.map((person) => (
          <PeopleCard key={person.id} people={person} />
        ))}

      </section>
      <Pagination
        currentPage={currentPage}
        totalItems={people.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Characters;
