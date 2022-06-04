import React, { ReactElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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

const QuizPage: React.FunctionComponent = (): ReactElement => {
  const [fakeStatement, setFakeStatement] = useState<Statement>();
  const [trueStatement, setTrueStatement] = useState<Statement>();
  const [showAnswer, setShowAnswer] = useState<Boolean>(false);
  const [isGoodAnswer, setIsGoodAnswer] = useState<Boolean>(false);
  const [playAgain, setPlayAgain] = useState(false);
  let firstStatementAsTrue: boolean = false;

  useEffect(() => {
    const fakeStatementNumber = randomIntFromInterval(1, fakeStatements.length);
    const trueStatementNumber = randomIntFromInterval(1, trueStatements.length);
    firstStatementAsTrue = !!randomIntFromInterval(0, 1);

    console.log('firstStatementAsTrue: ', firstStatementAsTrue);
    console.log('fakeStatementNumber: ', fakeStatementNumber);
    console.log('trueStatementNumber: ', trueStatementNumber);

    setFakeStatement(fakeStatements[fakeStatementNumber - 1]);
    setTrueStatement(trueStatements[trueStatementNumber - 1]);
  }, []);

  const validateStatement = (choosedFirstStatement: boolean): void => {
    if ((firstStatementAsTrue && choosedFirstStatement) || (!firstStatementAsTrue && !choosedFirstStatement)) {
      setIsGoodAnswer(true);
    } else {
      setIsGoodAnswer(false);
    }
    setShowAnswer(true);
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" color="primary.main">
        <Typography variant="h1" color="info.main" fontWeight="550">
          {QUIZ_TITLE}
        </Typography>
        <Typography variant="h3" marginTop="7%" color="primary.main">
          {QUIZ_SUBTITLE}
        </Typography>
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} m={4}>
        <Grid item xs={6} onClick={(e) => validateStatement(true)}>
          <Typography variant="h5" color="primary.main" m={2}>
            {firstStatementAsTrue ? trueStatement?.title : fakeStatement?.title}
          </Typography>
          <Typography component="p" align="center">
            {firstStatementAsTrue ? trueStatement?.text : fakeStatement?.text}
          </Typography>
        </Grid>
        <Grid item xs={6} onClick={(e) => validateStatement(false)}>
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
                sx={{ fontWeight: 600, color: isGoodAnswer ? 'lightseagreen' : 'red' }}
              >
                Your answer is: {isGoodAnswer ? 'good' : 'false'}
              </Typography>
              <Button variant="contained" color="primary">
                Play again
              </Button>
            </>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuizPage;
