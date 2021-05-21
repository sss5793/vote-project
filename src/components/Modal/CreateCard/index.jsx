import { useState } from 'react';
import dayjs from 'dayjs';
import { useToasts } from 'react-toast-notifications';

import Wrapper from '../Wrapper';
import Title from '../Title';
import ContentLayout from '../ContentLayout';

import Input from '../Input';
import DatePicker from './DatePicker';
import Buttons from '../Buttons';
import VoteItem from './VoteItem'
import { makeVoteData } from '../../../utils';

const CreateCard = ({user, addVote, onClose, onOpenPopup}) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState('');
  const [itemId, setItemId] = useState(0);
  const [itemList, setItemList] = useState([]);
	const { addToast } = useToasts();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangeDate = (e) => {
    const { value } = e.target;
    if(e.target.name === 'start'){
      setStartDate(value);
    }else {
      // 시작일 이전 선택 불가
      if(dayjs(startDate).isAfter(value)){
        return;
      }
      setEndDate(value);
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
    if(!title) {
      addToast('제목을 입력해주세요.', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }else if(!endDate) {
      addToast('마감일을 선택해주세요.', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }else if(itemList.length < 3) {
      addToast('투표 항목을 3개 이상 입력해주세요.', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }
    const data = makeVoteData({title, user, startDate, endDate, itemList});
    addVote(data);
  };

  return (
    <Wrapper>
      <Title>투표 생성</Title>
      <ContentLayout>
        <Input value={title} onChange={onChangeTitle} label={'제목'}/>
        <Input value={user.name} label={'생성자'} readOnly/>
        <DatePicker onChangeDate={onChangeDate} startDate={startDate} endDate={endDate}/>
        <VoteItem 
          itemList={itemList} 
          onAddItem={onAddItem} 
          onRemoveItem={onRemoveItem}
        />
        <Buttons btnName={'생성'} onClose={onClose} onConfirm={onCreate}/>
      </ContentLayout>
    </Wrapper>
  )
}

export default CreateCard;