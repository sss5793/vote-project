import styled from 'styled-components';
import { ReactComponent as Delete} from '../../../../assets/images/delete.svg';

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
  border: 1px solid #E5E5E5;
  font-size: 14px;
`;

const Item = ({data, onRemoveItem}) => {
  return (
    <Wrapper>
      <ItemInput readOnly value={data.value}/>
      <button onClick={() => onRemoveItem(data.id)}>
        <Delete />
      </button>
    </Wrapper>
  )
}

export default Item;