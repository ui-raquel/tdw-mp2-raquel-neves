import { useGetPeopleQuery } from '../../store/api/ghibliApi'
import Pagination from '../../components/common/Pagination/Pagination'
import { useState } from 'react'

function Characters() {
  const { data: people, error, isLoading } = useGetPeopleQuery()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  if (isLoading) return <div>Loading characters...</div>
  if (error) return <div>Error loading characters: {error.message}</div>
  if (!people) return <div>No characters found</div>

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPeople = people.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <h1>Studio Ghibli Characters</h1>
      <p>Total characters: {people.length} | Showing {startIndex + 1}-{Math.min(endIndex, people.length)} of {people.length}</p>
      <section>
        {currentPeople.map(person => (
          <div key={person.id} >
            <h3><a href={`/characters/${person.id}`}>{person.name}</a></h3>
            <p><strong>Gender:</strong> {person.gender}</p>
            <p><strong>Age:</strong> {person.age}</p>
          </div>
        ))}
      </section>
      <Pagination
        currentPage={currentPage}
        totalItems={people.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
    
  )
}

export default Characters