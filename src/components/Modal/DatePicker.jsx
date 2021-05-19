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

const DatePicker = () => {
  return (
    <Wrapper>
      <label><Label>기간</Label></label>
      <TextInput type='date'/>
      <p> ~ </p>
      <TextInput type='date'/>
    </Wrapper>
  );
};

export default DatePicker;