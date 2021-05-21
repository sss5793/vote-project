import { useState } from 'react';
import styled from 'styled-components';

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
  const [title, setTitle] = useState('');
  // const { title, startDate, endDate, voteItem, userId, totalVoteCnt } = data[0];

  const onConfirm = (e) => {
    setTitle(e.target.value);
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  return (
    <Wrapper height={'532px'}>
      <Title>투표 수정</Title>
      <ContentLayout>
        <Input value={title} onChange={onChangeTitle} label={'제목'}/>
        <ReadInput title={'생성자'} value={'생성자'}/>
        <ReadInput title={'기간'} value={'제목'}/>
        <div>
          <ItemHeader title={'투표 항목'} />
          <ScrollView>
            <Item value={'항목 1'}/>
          </ScrollView>
        </div>
        <Buttons btnName={'생성'} onClose={onClose} onConfirm={onClose}/>
      </ContentLayout>
    </Wrapper>
  );
};

export default ModifyCard;