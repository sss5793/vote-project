import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  height: 35px;
  display: flex;
  align-items: center;

  > p {
    margin: 0 5px;
  }
`;

const Label = styled.p`
  width: 100px;
  font-size: 16px;
`;

const TextInput = styled.input`
  width: 160px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  padding: 8px;
  font-size: 14px;
  text-align: right;
`;

const DatePicker = ({startDate, endDate, onChangeDate}) => {
  // TODO : 날짜 비교. 마감일을 시작일보다 이전으로 불가능하게
  return (
    <Wrapper>
      <label><Label>기간</Label></label>
      <TextInput name={'start'} type='date' value={startDate} onChange={onChangeDate}/>
      <p> ~ </p>
      <TextInput name={'end'} type='date' value={endDate}  onChange={onChangeDate}/>
    </Wrapper>
  );
};

export default DatePicker;