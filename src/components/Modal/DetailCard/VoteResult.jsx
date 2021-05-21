import styled from 'styled-components';
import ItemHeader from '../ItemHeader';

const Result = styled.p`
  font-size: 16px;
  color: #780EFF;
  font-weight: bold;
`;

const VoteResult = ({result}) => {
  return (
    <ItemHeader title={'투표 결과'}>
      <Result>{result}</Result>
    </ItemHeader>
  );
};

export default VoteResult;