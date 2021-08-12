import React from 'react';
import Height from './components/Height';
import './App.css';

function App() {

  let divHeight;

  window.setDivHeight = (height) => divHeight = height;

  return (
    <div className="App">
      <Height />
    </div>
  );
}

export default App;
