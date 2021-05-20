import styled from 'styled-components';

const Wrap = styled.section`
  background: rgba(255, 255, 255, 0.3);
  min-height: 170px;
  display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;
	flex-direction: column;
`;

const Wrapper = (props) => {
	return (
    <Wrap>
      {props.children}
    </Wrap>
)};

export default Wrapper;