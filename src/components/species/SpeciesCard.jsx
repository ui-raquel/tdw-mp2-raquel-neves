import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "../common/StyledComponents";
import styled from "styled-components";

const Title = styled.h2`
  margin: 0 0 10px 0;
  color: #2d3436;
`;

const Content = styled.div`
  flex: 1;
  align-content: center;
  text-align: left;
`;

const InfoText = styled.p`
  margin: 0 0 8px 0;
  color: #666;
`;

const FilmLink = styled(Link)`
  color: rgb(118, 75, 162);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: rgb(118, 75, 162);
  }
`;

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
    <Card style={{ display: 'flex', flexDirection: 'column' }}>
      <Title>
        {species.name}
        {species.classification !== species.name && ` (${species.classification})`}
      </Title>
      <Content>
        <InfoText>
          <strong><i className="bi bi-eye"></i> Eye Colors:</strong> {species.eye_colors}
        </InfoText>
        <InfoText>
          <strong><i className="bi bi-palette"></i> Hair Colors:</strong> {species.hair_colors}
        </InfoText>
        <InfoText>
          <strong><i className="bi bi-film"></i> Films:</strong> {
            loading ? 'Loading...' : 
            filmData.length > 0 ? (
              filmData.map((film, index) => (
                <span key={film.id}>
                  {film.id ? (
                    <FilmLink to={`/films/${film.id}`}>
                      {film.title}
                    </FilmLink>
                  ) : (
                    film.title
                  )}
                  {index < filmData.length - 1 && ', '}
                </span>
              ))
            ) : 'No films'
          }
        </InfoText>
      </Content>
    </Card>
  );
}

export default SpeciesCard;
