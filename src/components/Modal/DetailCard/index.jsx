import styled from 'styled-components';

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
  return (
    <Wrapper height={'522px'}>
      <Title>투표 상세보기</Title>
      <ContentLayout>
        <Input title={'제목'} value={'오늘 뭐하지?'}/>
        <Input title={'생성자'} value={'오늘 뭐하지?'}/>
        <Input title={'기간'} value={'오늘 뭐하지?'}/>
        <VoteResult result={'항목 2'}/>
        <ScrollView>
          <VoteItem name={'항목 1'} count={0} percent={0}/>
          <VoteItem name={'항목 2'} count={0} percent={0}/>
        </ScrollView>
        <BtnWrapper>
          <CommonBtn name={'닫기'} color={'#000'} bgColor={'#e5e5e5'} onClick={onClose}/>
        </BtnWrapper>
      </ContentLayout>
    </Wrapper>
  );
};

export default DetailCard;