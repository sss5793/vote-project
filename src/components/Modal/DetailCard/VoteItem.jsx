import styled from 'styled-components';

const VoteItemContainer = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
`;

const VoteItem = ({name, count, percent}) => {
  return (
    <VoteItemContainer>
      <p>{name}</p>
      <p>{count}표 ({percent}%)</p>
  </VoteItemContainer>
  );
};

export default VoteItem;