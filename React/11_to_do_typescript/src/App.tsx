import { useState, useEffect } from 'react';

import Navbar from './Components/Navbar';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { ITodo } from './Components/Interfaces';

declare var confirm: (question: string) => boolean;

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    // setTodos([newTodo, ...todos]);
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    const newTodo = [...todos].map(item => {
      if(item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(newTodo);
    /*
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    console.log(id, todo.completed);
      return todo;
    }));
    */
  };
  
  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Do you want to remove item ?');
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList 
          todos={todos} 
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
}

export default App;
