import './App.scss';
import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';

function App() {
  return (
    <main className='app'>
      <h1 className='app__title'>Rick and Morty Characters: Find yours</h1>
      <Filter />
      <CardList />
    </main>
  );
}

export default App;
