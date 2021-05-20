import styled from 'styled-components';

const NoCard = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 18px;
`;

const NoCardComp = () => (
  <NoCard>해당되는 투표가 없습니다.</NoCard>
);

export default NoCardComp;