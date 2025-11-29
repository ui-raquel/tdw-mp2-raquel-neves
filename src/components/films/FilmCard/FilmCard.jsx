import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../../common/StyledComponents";

// Wrapper para limitar a largura do card em grids para não ficar mega gigantesco quando há poucos resultados
const FilmCardWrapper = styled(Card)`
  max-width: 340px;
  width: 100%;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;

const FilmImage = styled.img`
  width: 70%;
  border-radius: 8px;
  margin-bottom: 15px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.h2`
  margin: 0 0 10px 0;
  color: #2d3436;
`;

const Content = styled.div`
  flex: 1;
`;

const InfoText = styled.p`
  margin: 0 0 8px 0;
  color: #666;
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
`;

const ViewDetailsButton = styled(Link)`
  display: block;
  text-align: center;
  padding: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    transform: translateY(-2px);
    color: white;
  }
`;

function FilmCard({ film }) {
  return (
    <FilmCardWrapper>
      <FilmImage
        src={film.image}
        alt={film.title}
        onError={(e) => {
          e.target.src = "/placeholder-image.jpg";
        }}
      />

      <Title>{film.title}</Title>

      <Content>
        <InfoText>
          <strong>Director:</strong> {film.director}
        </InfoText>
        <InfoText>
          <strong>Year:</strong> {film.release_date}
        </InfoText>
        <InfoText>
          <strong>Rating:</strong> ⭐ {film.rt_score}/100
        </InfoText>
      </Content>

      <ButtonContainer>
        <ViewDetailsButton to={`/films/${film.id}`}>
          View Details
        </ViewDetailsButton>
      </ButtonContainer>
    </FilmCardWrapper>
  );
}

export default FilmCard;
