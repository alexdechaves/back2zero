import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Header.css"

const useStyles = makeStyles({
  root: {
    width: "100%",
  }
});

export default function Header() {
  const classes = useStyles();

  const openMusicVideo = () => {
    window.location.href="https://www.youtube.com/watch?v=V0qEO9pdDGU"
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div className="player-container">
          {/* <iframe 
            src="https://player.vimeo.com/video/353289171?background=1"
            width="426" height="240"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen=""
            title="Back 2 Zero - People Like Us (Official Music Video)"
            data-ready="true">
          </iframe> */}
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            People Like Us
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The new single is out NOW!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Listen
        </Button>
        <Button onClick={openMusicVideo} size="small" color="primary">
          Watch Music Video
        </Button>
      </CardActions>
    </Card>
  );
}
