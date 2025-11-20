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
      <section>
        {people.map(person => (
          <div key={person.id} >
            <h3><a href={`/characters/${person.id}`}>{person.name}</a></h3>
            <p><strong>Gender:</strong> {person.gender}</p>
            <p><strong>Age:</strong> {person.age}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Characters