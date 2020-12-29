import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			name: '',
			country: ''
		};
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = e => {
		e.preventDefault();
		console.log(this.state);
		axios.post('http://62.173.140.14/data.php', this.state)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	render () {
		const { name, country } = this.state;

		return (
			<div>
				<form onSubmit={ this.submitHandler }>
					<div>
						<input 
							type="text" 
							name="name" 
							value={ name } 
							onChange={ this.changeHandler } 
						/>
					</div>

					<div>
						<input 
							type="text" 
							name="country" 
							value={ country }
							onChange={ this.changeHandler }  
						/>
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default PostForm;