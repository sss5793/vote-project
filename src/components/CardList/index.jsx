import { useState } from 'react';
import styled from 'styled-components';

import Title from './Title';
import Wrapper from './Wrapper';
import MoreBtn from './MoreBtn';
import NoCard from './NoCard';

import Card from '../Card/VotingCard';
import ClosedCard from '../Card/ClosedCard';

const CardContainer = styled.section`
	width: 100%;
	
	> div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30%, auto));
		gap: 20px;
		padding: 20px;
	}
`;

const CardList = (props) => {
  const [ viewCardCnt, setViewCardCnt ] = useState(2);
  const { title, cardList, user, onDetailCard, isEndVote, updateVote } = props;
  
  // 더보기 보이도록 계산
  const onMoreCard = () => {
    setViewCardCnt(state => state + 3);
  };

	return (
	<section>
		<Title>{title}</Title>
		<Wrapper>
			{
				cardList.length === 0 ?
				<NoCard />:
				<CardContainer>
					<div>
            {
              !isEndVote ?
              cardList.map((item, index) => index <= viewCardCnt && <Card key={item.id} data={item} user={user} updateVote={updateVote} onDetailCard={onDetailCard}/>)
              :
              cardList.map(item => <ClosedCard key={item.id} data={item} user={user} onDetailCard={onDetailCard}/>)
            }
					</div>
					{
						cardList.length >= 4 && viewCardCnt < (cardList.length - 1)
						&&
						<MoreBtn onClick={onMoreCard}/>
					}
				</CardContainer>
			}
		</Wrapper>
	</section>
)};

CardList.defaultProps = {
	title: '',
  cardList: [],
  isEndVote: false
};

export default CardList;