import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 12px;
  padding: 20px;
  background: rgba(255,255,255,0.4);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 40px;

  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin: 10px 0;
  }

  ol {
    list-style-type: decimal;
    padding-left: 20px;
    margin: 10px 0;
  }

  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
`;

export const PageContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;
