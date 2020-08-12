import React from 'react';
import Nav from "./Components/Nav/Nav"
import Music from "./Components/Pages/Music/Music"
import Home from "./Components/Pages/Home/Home"
import './App.css';


let musicArr = [
  {
    uri: 'spotify:album:5LLA2dXznKSDHJ3M3dx5EP',
    title: 'People Like Us',
    image: '/PLU_COVER_YELLOW.png'
  },
  {
    uri: 'spotify:album:5RnwsjBGl6TEF266LZqfIT',
    title: 'My Jacket',
    image: ''
  },
  {
    uri: 'spotify:album:6czQbpyJwxb4Rp0S1rOUgP',
    title: 'Drive',
    image: '/DRIVE.jpg'
  },
  {
    uri: 'spotify:album:45JKHwLPYS31eA8cuOSNAf',
    title: 'Here, Alone',
    image: '/HERE_ALONE.jpg'
  }
]

function App() {
  return (
    <div className="App">
      <Nav music={<Music musicArr={musicArr} />} home={<Home />} />
    </div>
  );
}

export default App;
