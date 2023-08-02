import './App.scss';
import CardList from '../CardList/CardList';

function App() {
  return (
    <main className='app'>
      <h1 className='app__title'>Rick and Morty Characters: Find yours</h1>
      <CardList />
    </main>
  );
}

export default App;
