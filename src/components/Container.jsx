
import styled from 'styled-components';
import CommonBtn from './CommonBtn';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
	padding: 20px;
	background-color: #e5e5e5;
	max-width: 1280px;
	margin: 0 auto;
`

const UserInfo = styled.h1`
	font-size: 20px;
`;

const Header = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Container = (props) => {
	const user = props.user;
	return (
	<Wrapper>
		<Header>
			<UserInfo>	안녕하세요. {user.name}님!</UserInfo>
			<CommonBtn name={'투표 생성'} onClick={props.onHeaderBtnClick}/>
		</Header>
			<section>
				{props.children}
			</section>
	</Wrapper>
)}

export default Container;