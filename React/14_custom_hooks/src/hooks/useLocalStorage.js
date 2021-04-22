import { useState, useEffect } from 'react';

function useLocalStorage (initialValue, key) {

	const getValue = () => {
		const storage = localStorage.getItem(key);  // srting || null

		if (storage) {
			return JSON.parse(storage); // '[]'
		}

		return initialValue;
	};

	const [value, setValue] = useState(getValue);

	useEffect(() => {
		localStorage.setItem(key,JSON.stringify(value));
	}, [value]);

	return [value, setValue];
}

export { useLocalStorage };