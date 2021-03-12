import React, {useEffect, useRef, useState} from 'react';


const List = () => {
    const [todos, setTodos] = useState([])
    const [page, setPage] = useState(1);
    const limit = 10;
    const parentRef = useRef();
    const childRef = useRef();

    function useScroll(parentRef, childRef, callback) {
	    const observer = useRef();

	    useEffect(() => {
	        const options = {
	            root: parentRef.current,
	            rootMargin: '0px',
	            threshold: 0
	        }
	        observer.current = new IntersectionObserver(([target]) => {
	            if (target.isIntersecting) {
	                console.log('intersected')
	                callback()
	            }
	        }, options)

	        observer.current.observe(childRef.current)

	        return function () {
	            observer.current.unobserve(childRef.current)
	        };
	    }, [callback])
	};

    function fetchTodos(page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1)
            })
    }

     useScroll(parentRef, childRef, () => fetchTodos(page, limit));

    return (
        <div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
            {todos.map(todo =>
                <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                    {todo.id}. {todo.title}
                </div>
            )}
            <div ref={childRef} style={{height: 20, background: 'green'}}/>
        </div>
    );
};

export default List;