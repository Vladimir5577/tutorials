import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Workerdetail ({ match }) {
	
	useEffect (() => {
		fetchItem();
		console.log(match.params.id);
	}, []);

	const [item, setItem] = useState({});

	const fetchItem = async () => {
		const fetchItem = await fetch(`http://localhost:8000/get_worker_by_id/${match.params.id}`);
		const item = await fetchItem.json();
		setItem(item);
		console.log(item);
	}

	return (
		<div>
			<h1>Detail worker. Id: { item.id }</h1>
			<h2>Name: { item.name }</h2>
			<h2>Country: { item.country }</h2>
		



		</div>
	)

}

export default Workerdetail

