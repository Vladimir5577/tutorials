import { useState, useEffect } from 'react';
import axios from 'axios';

const EventSourcing = () => {
	
	const [messages, setMessages] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		subscribe();
	}, []);

	const subscribe = async () => {
		const eventSource = new EventSource('http://localhost:5000/connect');
		eventSource.onmessage = function (event) {
			// console.log(event.data);
			const message = JSON.parse(event.data);
			setMessages(prev => [message, ...prev]);
		};
	};

	const sendMessage = async () => {
		await axios.post('http://localhost:5000/new-messages', {
			message: value,
			id: Date.now()
		});
	};

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
								{ msg.message }
							</div>
						)
					}
				</div>
			</div>
		</div>
	);
};

export default EventSourcing;