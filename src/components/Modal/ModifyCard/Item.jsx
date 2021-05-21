import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 35px;
  align-items:center;
  justify-content: space-between;
  margin: 10px;
`;

const ItemInput = styled.input`
  width: 100%;
  margin-right: 10px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #E5E5E5;
`;

const Item = ({value, id, onChange}) => {
  return (
    <Wrapper>
      <ItemInput value={value} id={id} onChange={onChange}/>
    </Wrapper>
  )
}

export default Item;