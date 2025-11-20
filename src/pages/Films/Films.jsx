import { useGetFilmsQuery } from '../../store/api/ghibliApi'

function Films() {
  const { data: films, error, isLoading } = useGetFilmsQuery()

  if (isLoading) return <div>Loading films...</div>
  if (error) return <div>Error loading films: {error.message}</div>
  if (!films) return <div>No films found</div>

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <p>Total films: {films.length}</p>
      
      <div>
        {films.map(film => (
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
    </div>
  )
}

export default Films