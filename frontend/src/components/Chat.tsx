import React, { useEffect, useState } from 'react';
import { createStyles, Theme, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TextInput } from './TextInput';
import { MessageLeft, MessageRight } from './Message';

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '80vw',
      height: '80vh',
      maxWidth: '500px',
      maxHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'absolute',
      bottom: '0',
      right: '0',
    },
    paper2: {
      width: '80vw',
      maxWidth: '500px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
    },
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    messagesBody: {
      width: 'calc( 100% - 20px )',
      margin: 10,
      overflowY: 'scroll',
      height: 'calc( 100% - 80px )',
    },
  }),
);

export default function Chat() {
  const [sent, setSent] = useState(false);
  const [juanResponds, releaseJuan] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      releaseJuan(true);
    }, 10000);
  }, [sent]);

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Paper id="style-1" className={classes.messagesBody}>
          <MessageLeft
            message="Hi, my name is Juan"
            timestamp="05/06 11:14"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Juan"
            avatarDisp={false}
          />
          <MessageLeft
            message="How can I help you?"
            timestamp="05/06 11:14"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            avatarDisp={true}
          />
          {sent && (
            <MessageRight
              message="witam"
              timestamp="05/06 11:17"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="You"
              avatarDisp={true}
            />
          )}
          {juanResponds && (
            <MessageLeft
              message="Your request is beeing processed. Please wait"
              timestamp="05/06 11:18"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName=""
              avatarDisp={true}
            />
          )}
        </Paper>
        <TextInput activateJuan={setSent} />
      </Paper>
    </div>
  );
}
