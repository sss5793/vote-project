import { useState, useEffect } from 'react';
import './App.css';
import { Header, Container, CardList, CreateCardModal, Popup, DetailCardModal, ModifyCardModal } from './components';
import { users, voteList } from './mocks';
import { makeVoteId, formatVoteList, findVoteInfo, updateVoteList } from './utils';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  const [user, setUser] = useState(users[0]);
  const [isCreate, setIsCreate] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [voteInfo, setVoteInfo] = useState({});
  const [popupText, setPopupText] = useState(false);
  const [voteData, setVoteData] = useState([]);
  const [endVote, setEndVote] = useState([]);
  const [progressVote, setProgressVote] = useState([]);

  const onDetailCard = (id) => {
    setVoteInfo(findVoteInfo(id, voteData));
    setIsDetail(state => !state);
  }

  const onOpenPopup = (text) => {
    setPopupText(text);
		setIsPopup(state => !state);
  };

  const onChangeUser = (target) => {
		const item = users.filter(item => item.name === target.innerText);
		setUser(item[0]);
  };

  const addVote = (data) => {
    const id = makeVoteId(voteData);
    const newVoteData = { id, ...data};
    sortVoteList([...voteData, newVoteData]);
    setIsCreate(false);
  };

  const updateVote = (data) => {
    sortVoteList(updateVoteList(data, voteData));
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
      <ToastProvider placement={'top-center'}>
        <Header users={users} name={user.name} onChangeUser={onChangeUser}/>
        <Container user={user} onHeaderBtnClick={() => setIsCreate(true)}>
          <CardList title={'진행중인 투표'} cardList={progressVote} user={user} updateVote={updateVote} onDetailCard={onDetailCard} />
          <CardList title={'종료된 투표'} isEndVote cardList={endVote} user={user} onDetailCard={onDetailCard} />
        </Container>
        {
          isCreate && <CreateCardModal user={user} onOpenPopup={onOpenPopup} addVote={addVote} onClose={() => setIsCreate(false)} />
        }
        {
          isPopup && <Popup isConfirm text={popupText} onClose={onOpenPopup} />
        }
        {
          isDetail && <DetailCardModal data={voteInfo} onClose={onDetailCard}/>
        }
        <ModifyCardModal />
      </ToastProvider>
    </div>
  );
}

export default App;
