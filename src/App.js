import { useState, useEffect } from 'react';
import './App.css';
import { Header, Container, CardList, Card, ClosedCard, CreateCard, Popup, DetailCard } from './components';
import { users, voteList } from './mocks';
import { makeVoteId, formatVoteList } from './utils';

function App() {
  const [user, setUser] = useState(users[0]);
  const [isCreate, setIsCreate] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [popupText, setPopupText] = useState(false);
  const [voteData, setVoteData] = useState([]);
  const [endVote, setEndVote] = useState([]);
  const [progressVote, setProgressVote] = useState([]);

  const onDetailCard = () => {
    setIsDetail(state => !state);
  }

  const onOpenPopup = (text) => {
    setPopupText(text);
		setIsPopup(state => !state);
  };

  const onChangeUser = (target) => {
		const item = users.filter(item => item.name === target);
		setUser(item[0]);
  };

  const addVote = (data) => {
    const id = makeVoteId(voteData);
    const newVoteData = { id, ...data};
    sortVoteList([...voteData, newVoteData]);
    setIsCreate(false);
  };

  const sortVoteList = (list) => {
    setVoteData(list);
    localStorage.setItem('@voteData',JSON.stringify(list));
    const {newProgressVote, newEndVote} = formatVoteList(list);
    setEndVote(newEndVote);
    setProgressVote(newProgressVote)
  };

  useEffect(() => {
    const mockData = localStorage.getItem('@voteData');
    if(!mockData){
      sortVoteList(voteList);
    }else {
      sortVoteList(JSON.parse(mockData));
    }
  }, []);

  return (
    <div className="App">
      <Header users={users} name={user.name} onChangeUser={onChangeUser}/>
      <Container user={user} onHeaderBtnClick={() => setIsCreate(true)}>
        <CardList title={'진행중인 투표'} cardList={progressVote}>
          {
            progressVote.map(item => <Card onDetailCard={onDetailCard} key={item.id} data={item} user={user}/>)
          }
        </CardList>
        <CardList title={'종료된 투표'} cardList={endVote}>
          {
            endVote.map(item => <ClosedCard key={item.id} data={item} user={user}/>)
          }
        </CardList>
      </Container>
      {
        isCreate && <CreateCard user={user} onOpenPopup={onOpenPopup} addVote={addVote} onClose={() => setIsCreate(false)} />
      }
      {
        isPopup && <Popup isConfirm text={popupText} onClose={onOpenPopup} />
      }
      {
        isDetail && <DetailCard onClose={onDetailCard}/>
      }
    </div>
  );
}

export default App;
