import './App.css';
import React , { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

function Item({ match }) {
	useEffect(() => {
		fetchItem();
		// console.log(match);
	}, []);

	const [item, setItem] = useState({});

	const fetchItem = async () => {
		const fetchItem = await fetch(`http://62.173.140.14/data.php/?id=${match.params.id}`);
		const item = await fetchItem.json();
		setItem(item);
		console.log(item.name);
	};

  return (
    <div>
      <h1>Item</h1>
      <h1>Id: {item.id}</h1>
      <h1>Name: {item.name}</h1>
      <h1>Name: {item.country}</h1>

    </div>
  );
}

export default Item;
