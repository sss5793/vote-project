import { useState } from 'react';
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications';
import { findUser, formatDate } from '../../../utils';

import Wrapper from '../Wrapper';
import Title from '../Title';
import ContentLayout from '../ContentLayout';
import Buttons from '../Buttons';
import ItemHeader from '../ItemHeader';
import Item from './Item';

import Input from '../Input';
import ReadInput from '../ReadInput';

const ScrollView = styled.div`
  border-bottom: 1px solid #E5E5E5;
  overflow-y: auto;
  height: 146px;
  margin-bottom: 20px;
`;

const ModifyCard = ({data, modifyVote, onClose}) => {
  const [title, setTitle] = useState(data[0].title);
  const [voteItem, setVoteItem] = useState(data[0].voteItem);
  const { startDate, endDate, userId } = data[0];
  const user = findUser(userId);
	const { addToast } = useToasts();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangeVoteItem = (e) => {
    setVoteItem(state => state.map(item => {
      if(item.id === parseInt(e.target.id)){
        return {
          ...item,
          name: e.target.value
        }
      }
      return item 
    }));
  }

  const onModify = () => {
    if(!title) return addToast('제목을 입력해주세요.', {
      appearance: 'error',
      autoDismiss: true,
    });
    const updateData = {
      ...data[0],
      title,
      voteItem
    };
    modifyVote(updateData);
    addToast('투표가 수정되었습니다.', {
      appearance: 'success',
      autoDismiss: true,
    });
  }

  return (
    <Wrapper height={'532px'}>
      <Title>투표 수정</Title>
      <ContentLayout>
        <Input value={title} onChange={onChangeTitle} label={'제목'}/>
        <ReadInput title={'생성자'} value={user[0].name}/>
        <ReadInput title={'기간'} value={`${formatDate(startDate)} ~ ${formatDate(endDate)}`}/>
        <div>
          <ItemHeader title={'투표 항목'} />
          <ScrollView>
            {
              voteItem.map(item => <Item key={item.id} value={item.name} id={item.id} onChange={onChangeVoteItem}/>)
            }
          </ScrollView>
        </div>
        <Buttons btnName={'수정'} onClose={onClose} onConfirm={onModify}/>
      </ContentLayout>
    </Wrapper>
  );
};

export default ModifyCard;