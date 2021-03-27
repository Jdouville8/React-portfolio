import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <div>
        <TextField required id="standard-required" defaultValue="Name" />
        <TextField required id="standard-required" defaultValue="Email" />
        <TextField required id="standard-required" defaultValue="Phone Number" />
        
      </div>
    </form>
  );
}