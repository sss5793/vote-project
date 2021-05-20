import { useState } from 'react';
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
	const [value, setValue] = useState('선택해 주세요.');
	const [voteItemId, setVoteItemId] = useState('');
	const { data, user, onDetailCard, updateVote } = props;
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

	const onChangeItem = (target) => {
		setVoteItemId(target.id);
		setValue(target.innerText);
	};

	const onVote = (e) => {
		e.stopPropagation();
		if(!voteItemId) return console.log('선택해 주세요!')

		// 이미 투표했는지 확인
		if(data.voterList.indexOf(user.userId) !== -1){
			return console.log('선택해 주세요!');
		}

		// 사용자 정보 투표 항목에 넣기
		const updateData = {
			...data,
			voterList: [ ...data.voterList, user.userId],
			voteItem : data.voteItem.map(item => {
				if(item.id === parseInt(voteItemId)){
					return {
						id: item.id,
						name: item.name,
						count: item.count + 1,
					}
				}
				return item;
			})
		}
		setVoteItemId('');
		setValue('선택해 주세요.');
		updateVote(updateData);
	};

	return (
		<Wrap onClick={() => onDetailCard(data.id)} background={'#fff'}>
			<Header isClosed={isClosed} title={data.title} onDelete={onDelete} onUpdate={onUpdate}/>
			<section>
				<VoteInfo name={creator[0].name} startDate={data.startDate} endDate={data.endDate}/>
				<div className={'flex'}>
					<Dropdown
						value={value}
						options={data.voteItem}
						width={'100%'} 
						height={'35px'} 
						fontSize={'13px'}
						onChange={onChangeItem}
					/>
					<PurpleBtn name={'투표하기'} isDisable={!isClosed} onClick={onVote} />
				</div>
			</section>
		</Wrap>
	)
};

export default Card;