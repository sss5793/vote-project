import styled from 'styled-components';
import Dropdown from '../Dropdown';
import Header from './Header';
import VoteInfo from './VoteInfo';
import PurpleBtn from './PurpleBtn';

const Wrapper = styled.article`
	width: 300px;
	height: 130px;
	background: #fff;
	border-radius: 3px;
	padding: 15px;

	:hover {
    box-shadow: 0px 2px 12px rgb(0 0 0 / 30%);
		cursor: pointer;
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const Card = () => {
	const onUpdate = (e) => {
		e.stopPropagation();
		console.log('수정');
	};

	const onDelete = (e) => {
		e.stopPropagation();
		console.log('삭제');
	};

	const onVote = (e) => {
		e.stopPropagation();
		console.log('투표하기');
	};

	return (
		<Wrapper onClick={() => {console.log('상세보기')}}>
			<Header title={'제목'} onDelete={onDelete} onUpdate={onUpdate}/>
			<section>
				<VoteInfo name={'아구몬'} startDate={'20.05.10'} endDate={'20.05.20'}/>
				<div className={'flex'}>
					<Dropdown width={'100%'} height={'35px'} fontSize={'13px'}/>
					<PurpleBtn name={'투표하기'} onClick={onVote} />
				</div>
			</section>
		</Wrapper>
	)
};

export default Card;