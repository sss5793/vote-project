import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const ItemLabel = styled.span`
  width: 100px;
  font-size: 16px;
  flex-shrink: 0;
`;

const Item = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  pointer-events: none;
`;

const ReadInput = ({title, value}) => {
  return (
    <ItemContainer>
      <ItemLabel>{title}</ItemLabel>
      <Item value={value} readOnly /> 
    </ItemContainer>
  );
};

export default ReadInput;