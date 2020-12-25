import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

	constructor (props) {
		super (props)
		this.state = {
			userId: '',
			name: '',
			country: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios.post('http://localhost:8000/api', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render () {
		const { userId, name, country } = this.state
		return (
			<div>
				<h1>Add worker</h1>
				<form onSubmit={ this.submitHandler } >
					{/*<input type="text" name="userId" value={ userId } onChange={ this.changeHandler } />*/}
					<label>Name: </label>
					<input type="text" name="name" value={ name } onChange={ this.changeHandler } />
					<br /><br />
					<label>Country: </label>
					<input type="text" name="country" value={ country } onChange={ this.changeHandler } />
					<br /><br />
					<button type="submit">Submit</button>
				</form> 
			</div>
		)
 	}

}

export default Form