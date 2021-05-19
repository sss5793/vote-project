import { useState } from 'react';
import './App.css';
import { Header, Container, CardList, Card, ClosedCard } from './components';
import { users, voteList } from './mocks';

function App() {
  const [user, setUser] = useState(users[0]);

  const onChangeUser = (target) => {
		const item = users.filter(item => item.name === target);
		setUser(item[0]);
  };

  // 카드 분류(진행중, 종료)

  return (
    <div className="App">
      <Header users={users} name={user.name} onChangeUser={onChangeUser}/>
      <Container user={user} >
        <CardList title={'진행중인 투표'} cardList={voteList}>
          <Card />
        </CardList>
        <CardList title={'종료된 투표'} cardList={voteList}>
          <ClosedCard />
        </CardList>
      </Container>
    </div>
  );
}

export default App;
