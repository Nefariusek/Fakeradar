import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const QuizPage: React.FunctionComponent = (): ReactElement => (
  <Container maxWidth="md">
    <Box textAlign="center" color="primary.main">
      <Typography variant="h1" color="info.main" fontWeight="550">
        True or fake quiz
      </Typography>
      <Typography variant="h5" marginTop="7%" color="primary.main">
        Choose which statement is fake?
      </Typography>
    </Box>

    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} m={4}>
      <Grid item xs={6}>
        <Typography component="p" align="center">
          Statement 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="p" align="center">
          Statement 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
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
