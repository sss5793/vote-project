import styled from 'styled-components';

const Text = styled.p`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #E5E5E5;
  padding: 30px 20px;
  font-size: 20px;
`;

const Title = (props) => {
  return (
    <Text>{props.children}</Text>
  )
}

export default Title;