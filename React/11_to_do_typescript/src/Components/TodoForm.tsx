import { useRef } from 'react';

interface TodoFormProps {
	onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {

	// const [title, setTitle] = useState<string>('');

	// const changeHandler = (evaent: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(event.target.value);
	// };

	const ref = useRef<HTMLInputElement>(null);
 
	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			props.onAdd(ref.current!.value);
			ref.current!.value = '';
			// console.log(title);
			// setTitle('');
		}
	};

	return (
		<div className="input-field mt2">
			<input 
				type="text" 
				id="title" 
				placeholder="Add to do" 
				// value={title}
				// onChange={changeHandler}
				ref={ref}
				onKeyPress={keyPressHandler}
			/>
			<label htmlFor="title" className="active">
				Add to do and press Enter
			</label>
		</div>
	);
};

export default TodoForm;
