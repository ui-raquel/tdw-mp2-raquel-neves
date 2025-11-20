import { useGetPeopleQuery } from '../../store/api/ghibliApi'

function Characters() {
  const { data: people, error, isLoading } = useGetPeopleQuery()

  if (isLoading) return <div>Loading characters...</div>
  if (error) return <div>Error loading characters: {error.message}</div>
  if (!people) return <div>No characters found</div>
  return (
    <div>
      <h1>Studio Ghibli Characters</h1>
      <p>Total characters: {people.length}</p>
    </div>
  )
}

export default Characters