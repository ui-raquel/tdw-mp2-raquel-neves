import { useGetSpeciesQuery } from "../../store/api/ghibliApi";
import SpeciesCard from "../../components/species/SpeciesCard";

function Species() {
  const { data: species, error, isLoading } = useGetSpeciesQuery();

  if (isLoading) return <div>Loading species...</div>;
  if (error) return <div>Error loading species: {error.message}</div>;
  if (!species) return <div>No species found</div>;

  return (
    <div>
      <h1>Studio Ghibli Species</h1>
      <p>Total species: {species.length}</p>

      <section 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "25px",
          width: "80%",
          margin: "0 auto",
          marginBottom: "30px",
          alignItems: "end"
        }}>

        {species.map((speciesItem) => (
          <SpeciesCard key={speciesItem.id} species={speciesItem} />
        ))}
        
      </section>
      
    </div>
  );
}

export default Species;
