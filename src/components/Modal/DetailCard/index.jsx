import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { findUser, formatDate, voteResult } from '../../../utils';

import Wrapper from '../Wrapper';
import Title from '../Title';
import ContentLayout from '../ContentLayout';
import BtnWrapper from '../BtnWrapper';

import CommonBtn from '../../CommonBtn';
import Input from './Input';
import VoteItem from './VoteItem';
import VoteResult from './VoteResult';

const ScrollView = styled.div`
  border-bottom: 1px solid #E5E5E5;
  overflow-y: auto;
  height: 146px;
  margin-bottom: 20px;
`;

const DetailCard = ({data, onClose}) => {
  const { title, startDate, endDate, voteItem, userId, totalVoteCnt } = data[0];
  const [voteItemList, setVoteItemList] = useState(voteItem);
  const [result, setResult] = useState({});
  const user = findUser(userId);

  // 결과 추출하기
  useEffect(() => {
    let arr = [];
    voteItemList.forEach(item => {
      const percent = Math.round((parseInt(item.count) / parseInt(totalVoteCnt)) * 1000) / 10;
      arr = [...arr, {
        ...item,
        percent
      }]
    })
    setResult(voteResult(arr));
    setVoteItemList(arr);
  }, []);

  return (
    <Wrapper height={'522px'}>
      <Title>투표 상세보기</Title>
      <ContentLayout>
        <Input title={'제목'} value={title}/>
        <Input title={'생성자'} value={user[0].name}/>
        <Input title={'기간'} value={`${formatDate(startDate)} ~ ${formatDate(endDate)}`}/>
        <VoteResult result={result.name}/>
        <ScrollView>
          {
            voteItemList.map(item => <VoteItem key={item.id + item.name} name={item.name} count={item.count} percent={item.percent}/>)
          }
        </ScrollView>
        <BtnWrapper>
          <CommonBtn name={'닫기'} color={'#000'} bgColor={'#e5e5e5'} onClick={onClose}/>
        </BtnWrapper>
      </ContentLayout>
    </Wrapper>
  );
};

export default DetailCard;