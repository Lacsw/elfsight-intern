import './App.scss';
import CardList from '../CardList/CardList';
import Search from '../Search/Search';

function App() {
  return (
    <main className='app'>
      <h1 className='app__title'>Rick and Morty Characters: Find yours</h1>
      <Search />
      <CardList />
    </main>
  );
}

export default App;
