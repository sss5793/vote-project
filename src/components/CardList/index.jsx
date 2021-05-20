import styled from 'styled-components';

import Title from './Title';
import Wrapper from './Wrapper';
import MoreBtn from './MoreBtn';
import NoCard from './NoCard';

const CardContainer = styled.section`
	width: 100%;
	
	> div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30%, auto));
		gap: 20px;
		padding: 20px;
	}
`;

const CardList = ({title, cardList, ...props}) => {
	// 더보기 보이도록 계산
	return (
	<section>
		<Title>{title}</Title>
		<Wrapper>
			{
				cardList.length === 0 ?
				<NoCard />:
				<CardContainer>
					<div>
						{props.children}
					</div>
					{
						cardList.length >= 4
						&&
						<MoreBtn />
					}
				</CardContainer>
			}
		</Wrapper>
	</section>
)};

CardList.defaultProps = {
	title: '',
	cardList: []
};

export default CardList;