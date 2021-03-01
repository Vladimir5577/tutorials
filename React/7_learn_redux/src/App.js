import { useSelector, useDispatch } from 'react-redux';
import Test from './Components/Test';

import './App.css';

function App() {

  const increment = () => {
    return {
      type: 'INCREMENT'
    };
  };

  const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  };

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello {counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      { isLogged ? <h2>Secret information</h2> : 'You are not logged in' }

      <Test />
    </div>
  );
}

export default App;
