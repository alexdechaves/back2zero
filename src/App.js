import React from 'react';
import Nav from "./Components/Nav/Nav"
import Music from "./Components/Pages/Music/Music"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav music={<Music />} />
    </div>
  );
}

export default App;
