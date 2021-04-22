import { useState, useEffect, useRef } from 'react';
import { ITodo } from './types/data';
import TodoList from './components/TodoList';

const App: React.FC = () => {

	const [value, setValue] = useState('');
	const [todos, setTodos] = useState<ITodo[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value);
	};

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') addTodo();
	};

	const addTodo = () => {
		if (value) {
			setTodos([...todos, {
				id: Date.now(),
				title: value,
				complete: false,
			}]);

			setValue('');			
		}
	};

	const removeTodo = (id: number): void => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const toggleTodo = (id: number): void => {
		setTodos(todos.map(todo => {
			if (todo.id !== id) return todo;

			return {
				...todo,
				complete: !todo.complete
			};
		}));
	};

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus();
	}, []);

  return (
    <div className="App">
      <h1>To do typescript</h1>
      <input 
      	value={value}
      	onChange={handleChange}
      	onKeyDown={handleKeyDown}
      	ref={inputRef}
      />
      <button onClick={addTodo} >Add</button>
      <TodoList
      	items={todos}
      	removeTodo={removeTodo}
      	toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
