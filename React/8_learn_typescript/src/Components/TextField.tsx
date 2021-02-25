import { useState, useRef } from 'react';

interface Person {
	firstName: string;
	lastName: string;
}

interface Props {
	text: string;
	ok?: boolean;
	i?: number;
	fn?: (bob: string) => string;
	person: Person;
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
	text: string
}

export const TextField: React.FC<Props> = ({handleChange}) => {
	const [count, setCount] = useState<number | null | undefined | string>(5);
	const [foo, setFoo] = useState<TextNode>({ text: 'hello' });
	const inputRef = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLDivElement>(null);
	
	{/*setCount(123);*/}

	return (
		<div ref={divRef}>
			<input ref={inputRef} onChange={handleChange} />
		</div>
	);
};