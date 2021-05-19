import Wrapper from './Wrapper';
import Item from './Item';

const VoteItem = ({itemList, onAddItem, onRemoveItem}) => {
  return(
    <Wrapper onAddItem={onAddItem}>
      {
        itemList.map((ele) => <Item key={ele.id+ ele.value} data={ele} onRemoveItem={onRemoveItem}/>)
      }
    </Wrapper>
  );
};

export default VoteItem;