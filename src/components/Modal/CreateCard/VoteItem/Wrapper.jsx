import { useState } from 'react';
import styled from 'styled-components';
import CommonBtn from '../../../CommonBtn';

const ItemList = styled.section`
  margin-top: 10px;
`;

const ItemListTitle = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  border-bottom: 1px solid #E5E5E5;
  padding-bottom: 20px;
`;

const ScrollView = styled.div`
  border-bottom: 1px solid #E5E5E5;
  overflow-y: auto;
  height: 146px;
`;

const AddItem = styled.div`
  display: flex;
  margin: 10px;
`;

const ItemInput = styled.input`
  width: 100%;
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #E5E5E5;
  font-size: 14px;
`;

const Wrapper = (props) => {
  const [itemValue, setItemValue] = useState('');

  const onChange = (e) => {
    setItemValue(e.target.value)
  }

  const onAdd = (e) => {
    if(itemValue === '') return;
    setItemValue('');
    props.onAddItem(itemValue);
  }

  return (
    <ItemList>
      <ItemListTitle>
        <p>항목 (최소 3개 이상)</p>
      </ItemListTitle>
      <AddItem>
        <ItemInput value={itemValue} onChange={onChange} placeholder={'항목을 입력해주세요.'}/>
        <CommonBtn onClick={onAdd} name={'추가'} />
      </AddItem>
      <ScrollView>
        {props.children}
      </ScrollView>
    </ItemList>
  )
}

export default Wrapper;