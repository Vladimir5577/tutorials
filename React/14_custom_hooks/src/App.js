import { useToggle } from './hooks/useToggle';
import { books } from './data/books';
import { Books } from './components/Books';
import { useLocalStorage } from './hooks/useLocalStorage';

 
function App() {

    const [isVisible, toggleVisible] = useToggle(true);
    const [order, setOrder] = useLocalStorage([], 'order');

    const addToOrder = (id) => {
        const newItem = books.find(item => item.id === id);

        setOrder([...order, newItem]);
    };


  return (
    <div>
      Hello React

      <button onClick={toggleVisible}>Toggle</button>
      {
          isVisible && (
              <h1>Toggle text</h1>
          )
      }

      <Books items={books} addToOrder={addToOrder} />
    </div>
  );
}

export default App;
