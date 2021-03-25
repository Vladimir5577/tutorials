import { ITodo } from './Interfaces';

type TodoListProps = {
	todos: ITodo[];
	onToggle(id: number): void;
	onRemove: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {

	if (todos.length === 0) {
		return <p>There are no todo</p>
	}

	const removeHandler = (event: React.MouseEvent, id: number) => {
		event.preventDefault();
		onRemove(id);
	};

	return (
		<ul>
			{ todos.map(todo => {
				const classes = ['todo'];
				if (todo.completed) {
					classes.push('completed');
				}
				return (
					<li className={classes.join(' ')} key={todo.id}>
						<label>
							<input 
								type="checkbox"
								checked={todo.completed} 
								onChange={onToggle.bind(null, todo.id)}
							/>
							<span>{todo.title}</span>
							<i 
								className="material-icon red-text" 
								onClick={event => removeHandler(event, todo.id)}
							>
								Delete
							</i>
						</label>
					</li>
				);
			})}
		</ul>
	);
};

export default TodoList;