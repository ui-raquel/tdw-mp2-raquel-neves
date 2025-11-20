import { useGetSpeciesQuery } from '../../store/api/ghibliApi'

function Animals() {
  const { data: species, error, isLoading } = useGetSpeciesQuery()

  if (isLoading) return <div>Loading animals...</div>
  if (error) return <div>Error loading animals: {error.message}</div>
  if (!species) return <div>No animals found</div>

  return (
    <div>
      <h1>Studio Ghibli Species</h1>
      <p>Total species: {species.length}</p>
      <section>
        {species.map(speciesItem => (
          <div key={speciesItem.id} >
            <h3><a href={`/animals/${speciesItem.id}`}>{speciesItem.name}</a></h3>
            <p><strong>Classification:</strong> {speciesItem.classification}</p>
            <p><strong>Eye Colors:</strong> {speciesItem.eye_colors}</p>
            <p><strong>Hair Colors:</strong> {speciesItem.hair_colors}</p>
          </div>
        ))} 
      </section>
    </div>
  )
}

export default Animals