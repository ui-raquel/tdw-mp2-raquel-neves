import { useGetFilmByIdQuery } from '../../store/api/ghibliApi'
import { useParams } from 'react-router-dom'

function FilmDetail() {
  const { id } = useParams()
  const { data: film, error, isLoading } = useGetFilmByIdQuery(id)

  if (isLoading) return <div>Loading films...</div>
  if (error) return <div>Error loading films: {error.message}</div>
  if (!film) return <div>No films found</div>

  return (
    <h1>{film.title}</h1>
  )
}

export default FilmDetail