import { useState } from 'react';
import styled from 'styled-components';
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

const ModifyCard = ({data, onClose}) => {
  const [title, setTitle] = useState(data[0].title);
  const { startDate, endDate, voteItem, userId } = data[0];
  const user = findUser(userId);

  const onChange = (e) => {
    console.log(e.target);
  }

  const onDelete = (id) => {
    console.log(id);
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
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
              voteItem.map(item => <Item key={item.id} value={item.name} id={item.id} onDelete={onDelete} onChange={onChange}/>)
            }
          </ScrollView>
        </div>
        <Buttons btnName={'생성'} onClose={onClose} onConfirm={onClose}/>
      </ContentLayout>
    </Wrapper>
  );
};

export default ModifyCard;