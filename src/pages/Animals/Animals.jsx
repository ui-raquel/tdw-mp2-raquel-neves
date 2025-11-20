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
    </div>
  )
}

export default Animals