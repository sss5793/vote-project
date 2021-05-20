import styled from 'styled-components';

const Wrapper = styled.article`
	height: 130px;
	background: ${props => props.background};
	border-radius: 3px;
	padding: 15px;

	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export default Wrapper;