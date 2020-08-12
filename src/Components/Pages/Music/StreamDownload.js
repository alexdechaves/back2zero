import React, {useState} from "react"
import Button from "@material-ui/core/Button"
import SpotifyDialog from "./SpotifyDialog"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "./StreamDownload.css"


export default function StreamDownload(props) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = () => {
        setIsOpen(true);
      };
    
      const handleClose = () => {
        setIsOpen(false);
      };


    return(  
        <Card className="music-card">
          <CardMedia
            className="cover"
            image={props.image}
            title="Cover"
        />
        <div className="music-card-wrapper">
            <CardContent className={"card-content"}>
            <Typography component="h5" variant="h5">
                {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                Back 2 Zero
            </Typography>
            </CardContent>
            <div className="stream-download">
                <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                    Stream/Download
                </Button>
                <SpotifyDialog uri={props.uri} open={isOpen} onClose={handleClose} /> 
            </div>
        </div>
        </Card>
    )
}