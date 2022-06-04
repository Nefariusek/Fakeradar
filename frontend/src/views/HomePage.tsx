import { Button, ButtonGroup, Grid, Typography, Palette } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactElement } from 'react';
import { divStyle } from '../constants/pagesStyles';
import { QUOTE, QUOTE_AUTHOR, TITLE } from '../constants/strings';

const HomePage: React.FunctionComponent = (): ReactElement => {
  const isCaptchaOk = true;
  return (
    <div className="homePage" style={divStyle}>
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
        <ButtonGroup color="primary" aria-label="outlined primary button group" style={{ marginTop: '10%' }}>
          <Button>HOW TO AVOID</Button>
          <Button>REPORT SCAM</Button>
          <Button>TEST YOUR SKILL</Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
};
export default HomePage;
