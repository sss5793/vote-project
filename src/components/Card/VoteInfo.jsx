import styled from 'styled-components';

const Wrapper = styled.div`
	margin-bottom : 15px;
	font-size: 14px;
`;

const VoteInfo = ({name, startDate, endDate}) => {
	return (
		<Wrapper className={'flex'}>
			<span>{name}</span>
			<span>{startDate}~{endDate}</span>
		</Wrapper>
	)
};

export default VoteInfo;