import styled from 'styled-components';
import CommonBtn from './CommonBtn';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
	padding: 20px;
	background-color: #e5e5e5;
`

const UserInfo = styled.h1`
	font-size: 20px;
`;

const Header = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const username = '아구몬';

const Container = (props) => (
    <Wrapper>
			<Header>
				<UserInfo>안녕하세요. {username}님!</UserInfo>
				<CommonBtn name={'투표 생성'}/>
			</Header>
			<section>
				{props.children}
			</section>
    </Wrapper>
)

export default Container;