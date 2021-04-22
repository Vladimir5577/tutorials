import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const WebSock = () => {
	
	const [messages, setMessages] = useState([]);
	const [value, setValue] = useState('');
	const socket = useRef();
	const [connected, setConnected] = useState(false);
	const [username, setUsername] = useState('');

	function connect () {
		socket.current = new WebSocket('ws://localhost:5000');

		socket.current.onopen = () => {
			setConnected(true);
			const message = {
				event: 'connection',
				username,
				id: Date.now()
			};
			socket.current.send(JSON.stringify(message));
			console.log('Connection established');
		};

		socket.current.onmessage = (event) => {
			const message = JSON.parse(event.data);
			setMessages(prev => [message, ...prev]);
		};

		socket.current.onclose = () => {
			console.log('Socket Closed');
		};

		socket.current.onerror = () => {
			console.log('Socket Error');
		};
	}


	const sendMessage = async () => {
		const message = {
			username,
			message: value,
			id: Date.now(),
			event: 'message'
		};
		socket.current.send(JSON.stringify(message));
		setValue('');
	};

	if (!connected) {
		return (
			<div>
				<div>
					<input
						type="text"
						placeholder="Enter name"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<button onClick={connect}>Enter</button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div>
				<div>
					<input 
						type="text"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<button onClick={sendMessage}>Send</button>
				</div>
				<div>
					{
						messages.map(msg => 
							<div
								key={msg.id}
								style={{ border: '2px solid blue', width: 200 }}
							>
								{ msg.event === 'connection' 
									? <div>User {msg.username} connected !</div>
									: <div>{msg.username} --- {msg.message}</div>
								}
							</div>
						)
					}
				</div>
			</div>
		</div>
	);
};

export default WebSock;