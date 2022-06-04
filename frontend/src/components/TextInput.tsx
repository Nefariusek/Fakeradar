import React from 'react';
import { TextField, Button, createStyles, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Icon } from '@mui/material';

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm: {
      display: 'flex',
      justifyContent: 'center',
      width: '95%',
      margin: 'auto',
    },
    wrapText: {
      width: '100%',
    },
    button: {
      //margin: theme.spacing(1),
    },
  }),
);

export const TextInput = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="Your message"
          className={classes.wrapText}
          //margin="normal"
        />
        <Button variant="contained" color="primary" className={classes.button}>
          <Icon>S</Icon>
        </Button>
      </form>
    </>
  );
};
