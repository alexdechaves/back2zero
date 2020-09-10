import React from "react";
import TitleField from "./TitleField";
import MultilineTextFields from "./TextField";
import EmailField from "./EmailField"
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";


export default function ContactForm(props) {

  const useStyles = makeStyles(theme => ({
    root: {
      margin: theme.spacing(3),
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column'
    }
  }));

  const classes = useStyles();

  return (
    <form className={classes.root} oValidate autoComplete="off">
      <TitleField />
      <EmailField />
      <MultilineTextFields />
      <Button>Send Message</Button>
    </form>
  );
}
