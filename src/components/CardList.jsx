import styled from 'styled-components';

const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  padding: 30px 0;
`;

const Wrapper = styled.section`
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  min-height: 170px;
  display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;
	flex-direction: column;
`;

const NoCard = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 18px;
`;

const CardContainer = styled.section`
	width: 100%;
	
	> div {
		display: flex;
    flex-flow: wrap;
	}
`;

const MoreBtn = styled.button`
	width: 100%;
	font-size: 18px;
	margin: 10px 0;
	padding: 10px;
`;


const CardList = ({title, cardList, ...props}) => {
	return (
	<section>
		<Title>{title}</Title>
		<Wrapper>
			{
				cardList.length === 0 ?
				<NoCard>해당되는 투표가 없습니다.</NoCard> :
				<CardContainer>
					<div>
						{props.children}
					</div>
					{
						cardList.length >= 2
						&&
						<MoreBtn>더보기</MoreBtn>
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