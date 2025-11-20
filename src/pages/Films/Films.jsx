import { useState } from 'react'
import { useGetFilmsQuery } from '../../store/api/ghibliApi'
import Pagination from '../../components/common/Pagination/Pagination'

function Films() {
  const { data: films, error, isLoading } = useGetFilmsQuery()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  if (isLoading) return <div>Loading films...</div>
  if (error) return <div>Error loading films: {error.message}</div>
  if (!films) return <div>No films found</div>

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentFilms = films.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <p>Total films: {films.length} | Showing {startIndex + 1}-{Math.min(endIndex, films.length)} of {films.length}</p>
      
      <div>
        {currentFilms.map(film => (
          <div key={film.id} >
            <h3><a href={`/films/${film.id}`}>{film.title}</a></h3>
            <p><strong>Director:</strong> {film.director}</p>
            <p><strong>Year:</strong> {film.release_date}</p>
            <p><strong>Rating:</strong> {film.rt_score}/100</p>
            <img 
              src={film.image} 
              alt={film.title}
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={films.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Films