import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <h1>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <NewBookForm />
        </BookContextProvider>
      </h1>
    </div>
  );
}

export default App;
