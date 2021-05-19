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
  margin-bottom: 30px;
`;

const NoCard = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 18px;
`;

const MoreList = styled.button`
  text-align: center;
  width: 100%;
  font-size: 18px;
`;

const CardList = ({title, cardList, ...props}) => (
	<section>
		<Title>{title}</Title>
		<Wrapper>
			{
				cardList.length === 0 ?
				<NoCard>해당되는 투표가 없습니다.</NoCard> :
				<div>
					{props.children}
					{
						cardList.length >= 4
						&& 
						<MoreList>더보기</MoreList>
					}
				</div>
			}
		</Wrapper>
	</section>
);

CardList.defaultProps = {
	title: '',
	cardList: []
};

export default CardList;