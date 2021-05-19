import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  height: 35px;
  display: flex;
  align-items: center;
`;

const Label = styled.p`
  width: 100px;
  font-size: 16px;
`;

const TextInput = styled.input`
  width: 50%;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  padding: 8px;
  font-size: 14px;
`;

const Input = ({label, ...props}) => {
  return (
    <Wrapper>
      <label><Label>{label}</Label></label>
      <TextInput type='text' {...props}/>
    </Wrapper>
  )
};

export default Input;