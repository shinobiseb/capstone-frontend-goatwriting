import React from 'react';
import logo from './logo.svg';
import { Header } from './components/Header';
import { Main } from './components/Main';
import "./styles.scss"

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
