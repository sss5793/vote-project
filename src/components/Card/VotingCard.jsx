import styled from 'styled-components';
import Wrapper from './Wrapper';
import Dropdown from '../Dropdown';
import Header from './Header';
import VoteInfo from './VoteInfo';
import PurpleBtn from './PurpleBtn';
import { users } from '../../mocks';

const Wrap = styled(Wrapper)`
	:hover {
    box-shadow: 0px 2px 12px rgb(0 0 0 / 30%);
		cursor: pointer;
	}
`;

const Card = (props) => {
	let voteItem = '';
	const { data, user } = props;
	const creator = users.filter(item => item.userId === data.userId);
	const isClosed = user.name !== creator[0].name;

	const onUpdate = (e) => {
		e.stopPropagation();
		console.log('수정');
	};

	const onDelete = (e) => {
		e.stopPropagation();
		console.log('삭제');
	};

	const onChangeItem = (e) => {
		voteItem = e;
	};

	const onVote = (e) => {
		e.stopPropagation();
		console.log('투표하기', voteItem);
	};

	return (
		<Wrap onClick={() => {console.log('상세보기')}} background={'#fff'}>
			<Header isClosed={isClosed} title={data.title} onDelete={onDelete} onUpdate={onUpdate}/>
			<section>
				<VoteInfo name={creator[0].name} startDate={data.startDate} endDate={data.endDate}/>
				<div className={'flex'}>
					<Dropdown 
						options={data.voteItem}
						defaultValue={'선택해 주세요.'} 
						width={'100%'} 
						height={'35px'} 
						fontSize={'13px'}
						onChange={onChangeItem}
					/>
					<PurpleBtn name={'투표하기'} onClick={onVote} />
				</div>
			</section>
		</Wrap>
	)
};

export default Card;