// src/App.js
import React from 'react';
import RootNode from './components/RootNode';
import './App.css'; // Optional: for basic styling

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Care</h1>
      </header>
      <main>
        <RootNode />
      </main>
    </div>
  );
}

export default App;