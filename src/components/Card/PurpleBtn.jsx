import styled from 'styled-components';

const Btn = styled.button`
	width: 70px;
	height: 35px;
	background: #780EFF;
	color: #fff;
	border: 0;
	font-size: 13px;
	font-weight: 600;
	margin-left: 17px;
	flex-shrink: 0;

	:disabled {
		background: #E5E5E5;
		cursor: auto;
	}
`;

const PurpleBtn = ({onClick, name, isDisable}) => {
	return (
		<Btn onClick={onClick} disabled={isDisable}>{name}</Btn>
	)
};

export default PurpleBtn;