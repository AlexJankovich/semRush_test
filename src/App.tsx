import React from 'react';
import './App.css';
import {InfoTable} from './components/InfoTable';
import {InputForm} from './components/InputForm';

function App() {

  return (
    <div className="App">
      <InputForm/>
      <InfoTable/>
    </div>
  );
}

export default App;
