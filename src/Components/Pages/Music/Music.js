import StreamDownload from "./StreamDownload";
import Header from "./Header"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
 
export default function Music(props) {
    const classes = useStyles();

    const AllMusic = props.musicArr.map((content, index) => {
        return(
            <Grid className={classes.paper} item xs={6}>
                <StreamDownload title={content.title} key={index} uri={content.uri} image={content.image} />
            </Grid>
        )
    })
    
    return(
        <div>
            <Header />
            <Grid container>
                {AllMusic}
            </Grid>
        </div>
        )
}