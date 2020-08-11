import SpotifyPlayer from 'react-spotify-player';
import Header from "./Header"
import React from "react"
 
export default function Music() {
    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
        width: '100%',
        height: 300,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'
    
    return(
        <div>
            <Header />
            <SpotifyPlayer
            uri="spotify:album:04mkS7FooK8fRbB626T9NR"
            size={size}
            view={view}
            theme={theme}
            />
        </div>
        )
}