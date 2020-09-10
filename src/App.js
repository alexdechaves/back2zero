import React from 'react';
import Nav from "./Components/Nav/Nav"
import Music from "./Components/Pages/Music/Music"
import Home from "./Components/Pages/Home/Home"
import Photos from "./Components/Pages/Photos/Photos"
import Video from "./Components/Pages/Video/VideoItem"
import drive from "./static/images/DRIVE.jpg"
import plu from "./static/images/PLU_COVER_YELLOW.png"
import hereAlone from "./static/images/HERE_ALONE.jpg"
import './App.css';
import ContactForm from './Components/Pages/Contact/ContactForm';


let musicArr = [
  {
    uri: 'spotify:album:5LLA2dXznKSDHJ3M3dx5EP',
    title: 'People Like Us',
    image: plu
  },
  {
    uri: 'spotify:album:5RnwsjBGl6TEF266LZqfIT',
    title: 'My Jacket',
    image: ''
  },
  {
    uri: 'spotify:album:6czQbpyJwxb4Rp0S1rOUgP',
    title: 'Drive',
    image: drive
  },
  {
    uri: 'spotify:album:45JKHwLPYS31eA8cuOSNAf',
    title: 'Here, Alone',
    image: hereAlone
  }
]

function App() {
  return (
    <div className="App">
      <Nav
      music={<Music musicArr={musicArr} />}
      home={<Home />} 
      photos={<Photos />}
      contact={<ContactForm />}
      video={<Video />}
      />
    </div>
  );
}

export default App;
