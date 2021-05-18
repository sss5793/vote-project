import './App.css';
import { Header, Container, CardList } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <CardList title={'진행중인 투표'} />
        <CardList title={'종료된 투표'} />
      </Container>
    </div>
  );
}

export default App;
