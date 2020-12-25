import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'

 
class Database extends Component {
	constructor (props) {
		super(props)

		this.state = {
			posts: []
		}
	}

	componentDidMount () {
		axios.get('http://localhost:8000/get_workers')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
				console.log(error)
			})
	}

	deleteWorker (event) {
		console.log(event.target.value);
		axios.get(`http://localhost:8000/delete_worker_by_id/${event.target.value}`)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})

	}



	render () {
		const { posts } = this.state
		return (
			<div>
				<h1>List of workers</h1>

				<table className="data_table" >
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Country</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{
							posts.length ? 
							posts.map(post => (
								<tr key={ post.id } >
									<td>{ post.id }</td>
									<td>{ post.name }</td>
									<td>{ post.country }</td>
									<td>
										<Link to={ `/worker/${post.id}` }>
											<button>Detail</button>
										</Link>
										<button onClick={ this.deleteWorker } value={ post.id } >Delete</button>
									</td>
								</tr>
							)) :
							null
						}
					</tbody>

				</table>

			</div>
		)
	}
} 

export default Database