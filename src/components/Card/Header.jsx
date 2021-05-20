import styled from 'styled-components';

const Wrapper = styled.header`
	margin-bottom : 15px;
`;

const Title = styled.h2`
	font-size: 18px;
`;

const BtnWrapper = styled.div`
	visibility: ${props => props.visibility};
`;

const SmallBtn = styled.button`
	background: transparent;
	border: 0;
	padding: 0;
	margin-left: 15px;
	font-size: 12px;
`;

const Header = ({title, onUpdate, onDelete, isClosed}) => {
	return (
	<Wrapper className={'flex'}>
		<Title>{title}</Title>
		<BtnWrapper visibility={isClosed ? 'hidden' : 'visible'}>
			<SmallBtn onClick={onUpdate}>수정</SmallBtn>
			<SmallBtn onClick={onDelete}>삭제</SmallBtn>
		</BtnWrapper>
	</Wrapper>
	)
};

Header.defaultProps = {
	onUpdate : () => {},
	onDelete : () => {}
}

export default Header;