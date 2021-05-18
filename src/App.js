import { useState } from 'react';
import './App.css';
import { Header, Container, CardList } from './components';
import { users } from './mocks';

function App() {
  const [user, setUser] = useState(users[0]);

  const onChangeUser = (target) => {
		const item = users.filter(item => item.name === target);
		setUser(item[0]);
  };

  return (
    <div className="App">
      <Header users={users} name={user.name} onChangeUser={onChangeUser}/>
      <Container user={user} >
        <CardList title={'진행중인 투표'} />
        <CardList title={'종료된 투표'} />
      </Container>
    </div>
  );
}

export default App;
