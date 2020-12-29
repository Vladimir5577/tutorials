import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {

	constructor (props) {
		super(props);

		this.state = {
			posts: [],
			errorMsg: ''
		};
	}

	componentDidMount () {
		axios.get('http://62.173.140.14/data.php')
			.then(response => {
				console.log(response);
				this.setState({posts: response.data})
			})
			.catch(error => {
				console.log(error);
				this.setState({errorMsg: 'Error retreiving data'});
			});
	}

	render () {
		const { posts, errorMsg } = this.state;
		return (
			<div>
				<h1>List of post</h1>

				<table border="4" cellSpacing="0" cellPadding="8">
					<thead>
						<tr>
							<td>Id</td>
							<td>Name</td>
							<td>Country</td>
						</tr>
					</thead>

					<tbody>
						{ 
							posts.length ?
							posts.map(post => {
								return (
									<tr key={ post.id }>
										<td>{ post.id }</td>
										<td>{ post.name }</td>
										<td>{ post.country }</td>
									</tr>
								);
							}) 
							
							:null
						}

					</tbody>

				</table>
				
				{ errorMsg ? <div>{ errorMsg }</div> : null }

			</div>
		);
	}
}

export default PostList;