import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 1px solid #E5E5E5;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 16px;
`;

const Result = styled.p`
  font-size: 16px;
  color: #780EFF;
  font-weight: bold;
`;

const VoteResult = ({result}) => {
  return (
    <Container>
      <Title>투표 결과</Title>
      <Result>{result}</Result>
    </Container>
  );
};

export default VoteResult;