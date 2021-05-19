import { useState, useEffect } from 'react';
import './App.css';
import { Header, Container, CardList, Card, ClosedCard, CreateCard } from './components';
import { users, voteList } from './mocks';
import dayjs from 'dayjs';

function App() {
  const [user, setUser] = useState(users[0]);
  const [endVote, setEndVote] = useState([]);
  const [isCreate, setIsCreate] = useState(false);
  const [progressVote, setProgressVote] = useState([]);

  const onChangeUser = (target) => {
		const item = users.filter(item => item.name === target);
		setUser(item[0]);
  };

  // 카드 분류(진행중, 종료)
  const formatVoteList = (list) => {
    list.forEach(element => {
      const res = dayjs().isBefore(element.endDate);
      if(res){
        setProgressVote(state => [...state, element]);
      }else{
        setEndVote(state => [...state, element]);
      }
    });
  };

  useEffect(() => {
    const mockData = localStorage.getItem('@voteData');
    if(!mockData){
      localStorage.setItem('@voteData',JSON.stringify(voteList));
      formatVoteList(JSON.parse(voteList));
    }else {
      formatVoteList(JSON.parse(mockData));
    }
  }, []);

  return (
    <div className="App">
      <Header users={users} name={user.name} onChangeUser={onChangeUser}/>
      <Container user={user} onHeaderBtnClick={() => setIsCreate(true)}>
        <CardList title={'진행중인 투표'} cardList={progressVote}>
          {
            progressVote.map(item => <Card key={item.id} data={item} user={user}/>)
          }
        </CardList>
        <CardList title={'종료된 투표'} cardList={endVote}>
          {
            endVote.map(item => <ClosedCard key={item.id} data={item} user={user}/>)
          }
        </CardList>
      </Container>
      {
        isCreate && <CreateCard user={user} onClose={() => setIsCreate(false)} />
      }
    </div>
  );
}

export default App;
