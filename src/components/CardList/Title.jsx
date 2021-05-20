import styled from 'styled-components';

const Text = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  padding: 30px 0;
`;

const Title = (props) => {
	return (
    <Text>{props.children}</Text>
)};

export default Title;