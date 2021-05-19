import styled from 'styled-components';

const Wrapper = styled.article`
	width: 300px;
	height: 130px;
	background: ${props => props.background};
	border-radius: 3px;
	padding: 15px;
	margin: 0 20px 20px 0;

	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export default Wrapper;