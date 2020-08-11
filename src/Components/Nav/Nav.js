import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import TabLogo from "./TabLogo"
import HomeLogo from "./HomeLogo"
import Social from "./Social"
import TabPanel from "./TabPanel"

const useStyles = makeStyles({
  root: {
    flexGrow: 3,
    maxWidth: "100%",
    fontFamily: "Pacifico",
    opacity: 1
  }
});



export default function Nav(props) {
  const classes = useStyles();
  const [state, setState] = useState(3)
  const [socialOpen, setSocialOpen] = useState(false)

  const handleChange = (event, newValue) => {
    setState(newValue);
  };

  const handleMouseOver = () => {
      setSocialOpen(true)
  }

  const handleMouseOut = () => {setSocialOpen(false)}

  return (
    <div>
      <Paper square className={classes.root}>
        <Tabs
          value={state}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab label="MUSIC" />
          <Tab label="VIDEO" />
          <Tab label="PHOTOS" />
          <Tab icon={<HomeLogo style={{ width: "100%", height: 75 }}/>}/>
          <Tab label="TOUR" />
          <Tab label="CONTACT" />
          <Tab onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} label="SOCIAL"></Tab>
        </Tabs>
      </Paper>
      <TabPanel value={state} index={0}>
        {props.music}
      </TabPanel>
      <TabPanel value={state} index={1}>
        {props.video}
      </TabPanel>
      <TabPanel value={state} index={2}>
        {props.photos}
      </TabPanel>
      <TabPanel value={state} index={3}>
        {props.home}
      </TabPanel>
      <TabPanel value={state} index={4}>
        {props.tour}
      </TabPanel>
      <TabPanel value={state} index={5}>
        {props.contact}
      </TabPanel>
    </div>
  );
}