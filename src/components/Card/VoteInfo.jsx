import styled from 'styled-components';
import dayjs from 'dayjs';

const Wrapper = styled.div`
	margin-bottom : 15px;
	font-size: 14px;
`;

const VoteInfo = ({name, startDate, endDate}) => {
	const formatDate = (date) => (dayjs(date).format('YY.MM.DD'));
	return (
		<Wrapper className={'flex'}>
			<span>{name}</span>
			<span>{formatDate(startDate)}~{formatDate(endDate)}</span>
		</Wrapper>
	)
};

export default VoteInfo;