import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './Components/TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      Hello
      <TextField text='hello' person={{ firstName: '', lastName: '' }} />
    </div>
  );
}

export default App;
