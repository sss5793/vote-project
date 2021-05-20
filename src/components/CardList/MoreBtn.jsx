import styled from 'styled-components';

const MoreBtn = styled.button`
	width: 100%;
	font-size: 18px;
	margin: 10px 0;
	padding: 10px;
`;

const MoreBtnComp = ({onClick}) => {
	return (
    <MoreBtn onClick={onClick}>더보기</MoreBtn>
)};

export default MoreBtnComp;