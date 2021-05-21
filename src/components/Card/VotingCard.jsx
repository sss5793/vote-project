import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
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
	const { addToast } = useToasts();
	const [value, setValue] = useState('선택해 주세요.');
	const [voteItemId, setVoteItemId] = useState('');
	const { data, user, onDetailCard, updateVote, deleteVote, onModifyCard } = props;
	const creator = users.filter(item => item.userId === data.userId);
	const isClosed = user.name !== creator[0].name;

	const onUpdate = (e) => {
		e.stopPropagation();
		onModifyCard(data.id);
	};

	const onDelete = (e) => {
		e.stopPropagation();
		deleteVote('정말로 삭제하시겠습니까?',data.id);
	};

	const onChangeItem = (target) => {
		setVoteItemId(target.id);
		setValue(target.innerText);
	};

	const onVote = (e) => {
		e.stopPropagation();
		if(!voteItemId) return addToast('투표 항목을 선택해주세요.', {
			appearance: 'error',
			autoDismiss: true,
		});

		// 이미 투표했는지 확인
		if(data.voterList.indexOf(user.userId) !== -1) return addToast('이미 진행하신 투표입니다.', {
				appearance: 'error',
				autoDismiss: true,
			});
		

		// 사용자 정보 투표 항목에 넣기
		const updateData = {
			...data,
			totalVoteCnt: data.totalVoteCnt + 1,
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
		addToast('투표가 정상적으로 되었습니다.', {
			appearance: 'success',
			autoDismiss: true,
		});
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