import { useState } from 'react';
import styled from 'styled-components';
import CommonBtn from '../../../CommonBtn';
import ItemHeader from '../../ItemHeader';

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
    <section>
      <ItemHeader title={'항목 (최소 3개 이상)'}/>
      <AddItem>
        <ItemInput value={itemValue} onChange={onChange} placeholder={'항목을 입력해주세요.'}/>
        <CommonBtn onClick={onAdd} name={'추가'} />
      </AddItem>
      <ScrollView>
        {props.children}
      </ScrollView>
    </section>
  )
}

export default Wrapper;