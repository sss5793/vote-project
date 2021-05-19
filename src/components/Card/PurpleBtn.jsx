import styled from 'styled-components';

const PurpleBtn = styled.button`
	width: 70px;
	height: 35px;
	background: #780EFF;
	color: #fff;
	border: 0;
	font-size: 13px;
	font-weight: 600;
	margin-left: 17px;
	flex-shrink: 0;
`;

const Card = ({onClick, name}) => {
	return (
		<PurpleBtn onClick={onClick}>{name}</PurpleBtn>
	)
};

export default Card;