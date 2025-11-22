import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function SpeciesCard({ species }) {
  const [filmData, setFilmData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (species.films && species.films.length > 0) {
      setLoading(true);
      
      const fetchFilmData = async () => {
        try {
          const filmPromises = species.films.map(url => fetch(url).then(res => res.json()));
          const films = await Promise.all(filmPromises);
          const filmInfo = films.map(film => ({ id: film.id, title: film.title }));
          setFilmData(filmInfo);
        } catch (error) {
          console.error('Error fetching film data:', error);
          setFilmData([{ id: '', title: 'Error loading films' }]);
        } finally {
          setLoading(false);
        }
      };

      fetchFilmData();
    }
  }, [species.films]);

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2
        style={{
          margin: "0 0 10px 0",
          color: "#2d3436",
        }}
      >
        {species.name}
        {species.classification !== species.name && ` (${species.classification})`}
      </h2>
      <div style={{ flex: 1, alignContent: 'center', textAlign: 'left' }}>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong><i className="bi bi-eye"></i> Eye Colors:</strong> {species.eye_colors}
        </p>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong><i className="bi bi-palette"></i> Hair Colors:</strong> {species.hair_colors}
        </p>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          <strong><i className="bi bi-film"></i> Films:</strong> {
            loading ? 'Loading...' : 
            filmData.length > 0 ? (
              filmData.map((film, index) => (
                <span key={film.id}>
                  {film.id ? (
                    <Link 
                      to={`/films/${film.id}`}
                      style={{
                        color: 'rgb(118, 75, 162)',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.textDecoration = 'underline';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.textDecoration = 'none';
                      }}
                    >
                      {film.title}
                    </Link>
                  ) : (
                    film.title
                  )}
                  {index < filmData.length - 1 && ', '}
                </span>
              ))
            ) : 'No films'
          }
        </p>
      </div>
    </div>
  );
}

export default SpeciesCard;
