import { useState, useEffect } from 'react';
import axios from 'axios';

const FormInput = () => {

	const [file, setFile] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [title, setTitle] = useState('');
	const [onSubmitPost, setOnSubmitPost] = useState(true);
	const [postData, setPostData] = useState([]);
	const [createPostMessage, setCreatePostMessage] = useState('');
	const [deletePostMessage, setDeletePostMessage] = useState('');
	const [postId, setPostId] = useState('');

	const inputFile = e => {
		setFile(e.target.files[0]);

		console.log(e.target.files[0]);
		setPreviewImage(URL.createObjectURL(e.target.files[0]));
		// console.log(previewImage);
		// console.log(e.target.value, 234);
	};


	const inputTitle = e => {
		setTitle(e.target.value);
		console.log(e.target.value);
	};

	const onSubmitCreate = async e => {
		 // debugger;
		 console.log(e);
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', file);
		formData.append('title', title);

		// try {
			try {
			const res = await axios.post('http://localhost:5000/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});
			}catch(e) {
				console.log(e);
			}
			//setCreatePostMessage(res.data.message);

			// console.log(res.data.message);
			//setCreatePostMessage(res.data.message);
		// } catch (err) {
		// 	if (err.response.status === 500) {
		// 		console.log('Server response 500');
		// 	}
		// }
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:5000/get_posts');
			setPostData(result.data);
			console.log(result.data);
		};
		fetchData();
		console.log('fetch');
	}, []);

	const deletePost = async (id) => {
		console.log(id);
		const post = await axios('http://localhost:5000/delete/' + id);
		console.log(post.data.message);
		setDeletePostMessage(post.data.message);
		console.log(deletePostMessage);
	};

	const editPost = async (id, image_path) => {
		// console.log(id);
		const result = await axios('http://localhost:5000/edit/' + id);
		// console.log(result.data);
		setTitle(result.data.title);
		setOnSubmitPost(false);
		setFile(false);
		setPostId(id);
		setPreviewImage(image_path);
	};

	const onSubmitUpdate = async (e) => {
		e.preventDefault();
		// console.log(e.target.files[0]);
		const formData = new FormData();
		// console.log(file);
		
		if (file) {
			console.log(132, file, 234);
			setFile(file);
			formData.append('file', file);
		}

		formData.append('title', title);
		// formData.append('id', postId);


		const res = await axios.patch('http://localhost:5000/update/' + postId, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});

		// console.log(res.data.message);
		setCreatePostMessage(res.data.message);

		setOnSubmitPost(true);
	};

	return (
		<div>
			<h1>Create Post</h1>
			{ previewImage && <img src={ previewImage } style={{ height: 200 }} alt="imagePreview" /> }
			<form onSubmit={ onSubmitPost ? onSubmitCreate : onSubmitUpdate }>
				<input type="hidden" value={ postId } />
				<input type="file" onChange={inputFile}  />
				<input type="text" onChange={inputTitle} value={ title } />
				<input type="submit" value={ onSubmitPost ? 'Submit' : 'Update' } />
			</form>

			<h1>Posts</h1>
			{ <h1 style={{ color: 'red' }} >{ deletePostMessage }</h1> }
			{ <h1 style={{ color: 'green' }} >{ createPostMessage }</h1> }

			<table border="5" cellPadding="5">
				<thead>
					<tr>
						<td>Id</td>
						<td>Title</td>
						<td>Photo</td>
						<td>Action</td>
					</tr>
				</thead>

				<tbody>
					{
						postData.map(post => {
							let image_path = 'http://localhost:3000/uploads/' + post.image;
							return (
								<tr key={ post._id }>
									<td>{ post._id }</td>
									<td>{ post.title }</td>
									<td><img src={ image_path } style={{ height: 100 }} alt="img" /></td>
									<td>
										<button onClick={ e => editPost(post._id, image_path) } >Edit</button>
										<button onClick={ e => deletePost(post._id) } >Delete</button>
									</td>
								</tr>
							);
						})
					}
				</tbody>

			</table>

		</div>
	);
};

export default FormInput;