import Wrapper from './Wrapper';
import Header from './Header';
import VoteInfo from './VoteInfo';
import PurpleBtn from './PurpleBtn';
import { users } from '../../mocks';

const ClosedCard = (props) => {
	const { data } = props;
	const creator = users.filter(item => item.userId === data.userId);
	const isClosed = true;

	const onVote = (e) => {
		e.stopPropagation();
		console.log('결과보기');
	};

	return (
		<Wrapper background={'#E5E5E5'}>
			<Header title={data.title} isClosed={isClosed}/>
			<section>
				<VoteInfo name={creator[0].name} startDate={data.startDate} endDate={data.endDate}/>
				<div className={'flex'}>
					<div></div>
					<PurpleBtn name={'결과보기'} onClick={onVote} />
				</div>
			</section>
		</Wrapper>
	)
};

export default ClosedCard;