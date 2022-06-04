import React, { ReactElement } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const QuizPage: React.FunctionComponent = (): ReactElement => (
  <Container maxWidth="md">
    <Typography component="p" align="center">
      Quiz Page
    </Typography>
  </Container>
);

export default QuizPage;
