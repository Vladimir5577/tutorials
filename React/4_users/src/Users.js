import './App.css';
import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data = await fetch('http://62.173.140.14/data.php');
		const items = await data.json();

		console.log(items);
		setItems(items);
	};

  return (
    <div>
      <h1>Users</h1>
     	{items.map(item => {
     		return (
     			<div key={ item.id }>
     				<Link to={`/user/${item.id}`}>
		     			<h2>{item.name}</h2>
		     		</Link>
     			</div>
     		);
     	})}
    </div>
  );
}

export default Shop;
