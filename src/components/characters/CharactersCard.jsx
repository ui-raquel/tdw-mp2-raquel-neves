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

function PeopleCard ({ people }) {
  return (
    <Card style={{ display: 'flex', flexDirection: 'column' }}>
      <Title>
        {people.name}
        {people.classification !== people.name && ` (${people.gender})`}
      </Title>
      
      <Content>
        <InfoText>
          <strong><i className="bi bi-eye"></i> Eye Color:</strong> {people.eye_color}
        </InfoText>
        <InfoText>
          <strong><i className="bi bi-palette"></i> Hair Color:</strong> {people.hair_color}
        </InfoText>
        <InfoText>
          <strong><i className="bi bi-cake2"></i> Age:</strong> {people.age}
        </InfoText>
      </Content>
    </Card>
  );
}

export default PeopleCard;
