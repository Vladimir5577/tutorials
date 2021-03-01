import { useSelector } from 'react-redux';

const Test = () => {
	const text = useSelector(state => state.text);

	return (
		<h1>{text}</h1>
	);
};

export default Test;