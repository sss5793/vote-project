import styled from 'styled-components';
import Input from './Input';
import DatePicker from './DatePicker';
import Buttons from './Buttons';
import VoteItem from './VoteItem'
import { useState } from 'react';
import dayjs from 'dayjs';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content :center;
`;

const Container = styled.div`
  width: 683px;
  height: 592px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #E5E5E5;
  padding: 30px 20px;
  font-size: 20px;
`;

const Form = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CreateCard = ({user, onClose}) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState('');
  const [itemId, setItemId] = useState(0);
  const [itemList, setItemList] = useState([]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangeDate = (e) => {
    if(e.target.name === 'start'){
      setStartDate(e.target.value);
    }else {
      setEndDate(e.target.value);
    }
  }

  const onAddItem = (value) => {
    setItemList(state => [...state, {
      id : itemId,
      value
    }]);
    setItemId(state => state + 1);
  }

  const onRemoveItem = (id) => {
    setItemList(state => state.filter(item => item.id !== id));
  }

  const onCreate = () => {
    if(itemList.length < 3) {
      // TODO : 팝업 추가
      console.log('항목 부족');
      return;
    }
    // TODO : 투표 아이템 데이터로 가공
    console.log(title, user, startDate, endDate, itemList);
  };

  return (
    <Wrapper>
      <Container>
        <Title>투표 생성</Title>
        <Form>
          <Input value={title} onChange={onChangeTitle} label={'제목'}/>
          <Input value={user.name} label={'생성자'} readOnly/>
          <DatePicker onChangeDate={onChangeDate} startDate={startDate} endDate={endDate}/>
          <VoteItem 
            itemList={itemList} 
            onAddItem={onAddItem} 
            onRemoveItem={onRemoveItem}
          />
        </Form>
        <Buttons onClose={onClose} onCreate={onCreate}/>
      </Container>
    </Wrapper>
  )
}

export default CreateCard;