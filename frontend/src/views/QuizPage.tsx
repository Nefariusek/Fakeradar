import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { fakeStatements } from '../data/fakeStatements';
import { trueStatements } from '../data/trueStatements';
import { QUIZ_TITLE, QUIZ_SUBTITLE } from '../constants/strings';

const QuizPage: React.FunctionComponent = (): ReactElement => (
  <Container maxWidth="md">
    <Box textAlign="center" color="primary.main">
      <Typography variant="h1" color="info.main" fontWeight="550">
        {QUIZ_TITLE}
      </Typography>
      <Typography variant="h5" marginTop="7%" color="primary.main">
        {QUIZ_SUBTITLE}
      </Typography>
    </Box>

    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} m={4}>
      <Grid item xs={6}>
        <Typography component="p" align="center">
          {fakeStatements[5].text}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="p" align="center">
          {trueStatements[7].text}
        </Typography>
      </Grid>
      <Grid item container justifyContent="center" xs={12} m={2}>
        <Button variant="contained" color="primary">
          Play again
        </Button>
      </Grid>
    </Grid>
  </Container>
);

export default QuizPage;
