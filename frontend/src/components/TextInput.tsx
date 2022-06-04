import { TextField, Button, createStyles, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import { Dispatch, SetStateAction } from 'react';

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
interface Juan {
  activateJuan: Dispatch<SetStateAction<boolean>>;
}
export const TextInput = (props: Juan) => {
  const { activateJuan } = props;
  const classes = useStyles();

  const handleClick = () => {
    activateJuan(true);
  };
  return (
    <>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="Your message"
          className={classes.wrapText}
          //margin="normal"
        />
        <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
          <SendIcon />
        </Button>
      </form>
    </>
  );
};
