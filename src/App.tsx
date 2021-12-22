import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <div className='appContainer'>
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
