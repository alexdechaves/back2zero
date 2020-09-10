import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

export default function TitleField() {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const useStyles = makeStyles(theme => ({
    root: {
      margin: theme.spacing(3)
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <TextField
          id="outlined-line-static"
          label="Title"
          onChange={e => onChange(e)}
          value={value}
          variant="outlined"
          fullWidth
        />
    </div>
  );
}
