import SpotifyPlayer from 'react-spotify-player';
import React from "react"
import Dialog from '@material-ui/core/Dialog';
 
export default function SpotifyDialog(props) {
    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
        width: '100%',
        height: 300,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'

    const handleClose = () => {
        props.onClose(props.selectedValue);
      };
    

    return(
        <Dialog onClose={handleClose} open={props.open}>
            <SpotifyPlayer
            uri={props.uri}
            size={size}
            view={view}
            theme={theme}
            />
        </Dialog>
        )
}