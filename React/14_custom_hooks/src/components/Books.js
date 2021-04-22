const Books = (props) => {
	const { items = [], addToOrder } = props;

	return (
		<div>
			{
				items.map((book) => {
					return <Book key={book.id} addToOrder={addToOrder} {...book} />;
				})
			}
		</div>
	);
};

const Book = (props) => {
	const { id, title, price, addToOrder } = props;

	return (
		<div key={ id }>
			<h2>{ title }</h2>
			<span>{ price }</span>
			<button onClick={() => addToOrder(id)}>Buy</button>
		</div>
	);
};

export { Books };