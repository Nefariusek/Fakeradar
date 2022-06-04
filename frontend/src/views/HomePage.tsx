import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { divStyle } from '../constants/pagesStyles';
import {
  PATH_TO_EDUCATIONPAGE,
  PATH_TO_QUIZPAGE,
  PATH_TO_REPORTPAGE,
  PATH_TO_LIVECHAT_WEBSITE,
} from '../constants/paths';
import { QUOTE, QUOTE_AUTHOR, TITLE } from '../constants/strings';

const HomePage: React.FunctionComponent = (): ReactElement => {
  const isCaptchaOk = true;
  return (
    <div className="homePage" style={divStyle}>
      <a href={PATH_TO_LIVECHAT_WEBSITE} target="_blank">
        <Button
          size="large"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          SPONSORS
        </Button>
      </a>
      <Grid container direction="column" justifyContent="space-around" alignItems="center" min-height="100%">
        <Box textAlign="center" color="primary.main">
          <Typography variant="h1" color="info.main" fontWeight="550">
            {TITLE}
          </Typography>
          <Typography variant="h5" marginTop="7%" color="primary.main">
            {QUOTE}
          </Typography>
          <Typography variant="h5" marginTop="3%" marginBottom="20%" color="primary.main">
            {QUOTE_AUTHOR}
          </Typography>
        </Box>
        <img src="./radar_logo.svg" alt="logo"></img>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          style={{ marginTop: '10%' }}
        >
          <Button component={Link} to={PATH_TO_EDUCATIONPAGE}>
            HOW TO AVOID
          </Button>
          <Button component={Link} to={PATH_TO_REPORTPAGE}>
            REPORT SCAM
          </Button>
          <Button component={Link} to={PATH_TO_QUIZPAGE}>
            TEST YOUR SKILL
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
};
export default HomePage;
