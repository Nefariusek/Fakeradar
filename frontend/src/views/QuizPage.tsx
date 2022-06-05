import React, { ReactElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { makeStyles } from '@mui/styles';
import { divStyle } from '../constants/pagesStyles';
import { fakeStatements } from '../data/fakeStatements';
import { trueStatements } from '../data/trueStatements';
import { QUIZ_TITLE, QUIZ_SUBTITLE } from '../constants/strings';
import randomIntFromInterval from '../services/randomIntFromInterval';

interface Statement {
  title: string;
  text: string;
  subject: string;
  date: string;
}

const useStyles = makeStyles((theme) => ({
  outerDiv: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const QuizPage: React.FunctionComponent = (): ReactElement => {
  const [fakeStatement, setFakeStatement] = useState<Statement>();
  const [trueStatement, setTrueStatement] = useState<Statement>();
  const [firstStatementAsTrue, setfirstStatementAsTrue] = useState<Boolean>(false);
  const [isGoodAnswer, setIsGoodAnswer] = useState<Boolean>(false);
  const [showAnswer, setShowAnswer] = useState<Boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    const fakeStatementNumber = randomIntFromInterval(1, fakeStatements.length);
    const trueStatementNumber = randomIntFromInterval(1, trueStatements.length);
    setFakeStatement(fakeStatements[fakeStatementNumber - 1]);
    setTrueStatement(trueStatements[trueStatementNumber - 1]);
    setfirstStatementAsTrue(!!randomIntFromInterval(0, 1));
  }, []);

  const validateStatement = (choosedFirstStatement: boolean): void => {
    if ((firstStatementAsTrue && choosedFirstStatement) || (!firstStatementAsTrue && !choosedFirstStatement)) {
      setIsGoodAnswer(true);
    } else {
      setIsGoodAnswer(false);
    }
    setShowAnswer(true);
  };

  const onClick = () => {
    const fakeStatementNumber = randomIntFromInterval(1, fakeStatements.length);
    const trueStatementNumber = randomIntFromInterval(1, trueStatements.length);
    setFakeStatement(fakeStatements[fakeStatementNumber - 1]);
    setTrueStatement(trueStatements[trueStatementNumber - 1]);
    setfirstStatementAsTrue(!!randomIntFromInterval(0, 1));
    setIsGoodAnswer(false);
    setShowAnswer(false);
  };

  return (
    <Container maxWidth="lg" sx={divStyle}>
      <Box textAlign="center" color="primary.main">
        <Typography variant="h1" color="info.main" fontWeight="550">
          {QUIZ_TITLE}
        </Typography>
        <Typography variant="h3" marginTop="7%" color="primary.main">
          {QUIZ_SUBTITLE}
        </Typography>
      </Box>

      <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} m={4} gap={2}>
        <Grid
          item
          xs={12}
          md={5}
          onClick={(e) => validateStatement(true)}
          sx={{
            borderRadius: '2%',
            backgroundColor: showAnswer ? (firstStatementAsTrue ? 'chartreuse' : 'lightcoral') : '',
            padding: 2,
          }}
          className={classes.outerDiv}
        >
          <Typography variant="h5" color="primary.main" m={2}>
            {firstStatementAsTrue ? trueStatement?.title : fakeStatement?.title}
          </Typography>
          <Typography component="p" align="center">
            {firstStatementAsTrue ? trueStatement?.text : fakeStatement?.text}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          onClick={(e) => validateStatement(false)}
          sx={{
            borderRadius: '2%',
            backgroundColor: showAnswer ? (!firstStatementAsTrue ? 'chartreuse' : 'lightcoral') : '',
            padding: 2,
          }}
          className={classes.outerDiv}
        >
          <Typography variant="h5" color="primary.main" m={2}>
            {firstStatementAsTrue ? fakeStatement?.title : trueStatement?.title}
          </Typography>
          <Typography component="p" align="center">
            {firstStatementAsTrue ? fakeStatement?.text : trueStatement?.text}
          </Typography>
        </Grid>
        <Grid item container direction="column" justifyContent="center" xs={12} m={2} gap={2}>
          {showAnswer ? (
            <>
              <Typography
                component="p"
                align="center"
                sx={{ fontWeight: 600, fontSize: 20, color: isGoodAnswer ? 'lightseagreen' : 'red' }}
                mb={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
               Your answer is: {isGoodAnswer ? 'good' : 'wrong'} {isGoodAnswer ? <CheckCircleIcon sx={{ml: 1}} /> : <CancelIcon sx={{ml: 1}} />}
              </Typography>
              <Grid item container justifyContent="center">
                <Button variant="contained" color="primary" onClick={onClick} sx={{ width: 200 }}>
                  Play again
                </Button>
              </Grid>
            </>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuizPage;
