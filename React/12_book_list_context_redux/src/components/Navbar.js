import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
	const { books } = useContext(BookContext);

	return (
		<div>
			<h1>Book List</h1>
			<p>Currently you have { books.length } books to get through .....</p>
		</div>
	);
};

export default Navbar;