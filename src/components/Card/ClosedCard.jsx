import styled from 'styled-components';
import Header from './Header';
import VoteInfo from './VoteInfo';
import PurpleBtn from './PurpleBtn';

const Wrapper = styled.article`
	width: 300px;
	height: 130px;
	background: #E5E5E5;
	border-radius: 3px;
	padding: 15px;

	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const ClosedCard = () => {
	const isClosed = true;

	const onVote = (e) => {
		e.stopPropagation();
		console.log('결과보기');
	};

	return (
		<Wrapper>
			<Header title={'제목'} isClosed={isClosed}/>
			<section>
				<VoteInfo name={'아구몬'} startDate={'20.05.10'} endDate={'20.05.20'}/>
				<div className={'flex'}>
					<div></div>
					<PurpleBtn name={'결과보기'} onClick={onVote} />
				</div>
			</section>
		</Wrapper>
	)
};

export default ClosedCard;