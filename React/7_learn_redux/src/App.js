import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Actions';

function App() {

	const counter = useSelector(state => state.counter);
	const isLogged = useSelector(state => state.isLogged);
	const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello {counter} </h1>

      <button onClick={() => dispatch(increment(5))} >+</button>
      <button onClick={() => dispatch(decrement())} >-</button>

      { isLogged ? <h2>Secret information</h2> : 'You are not logged in' }
      
    </div>
  );
}

export default App;
