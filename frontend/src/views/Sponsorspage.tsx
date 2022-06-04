import { Box, Grid, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import NavTabs from '../components/NavTabs';
import { divStyle } from '../constants/pagesStyles';
import { SPONSORSPAGE_TITLE } from '../constants/strings';

const Sponsorspage: React.FunctionComponent = (): ReactElement => (
  <>
    <NavTabs view="" />
    <div style={divStyle}>
      <Grid container direction="column" justifyContent="space-around" alignItems="center" min-height="100%">
        <Box textAlign="center" color="primary.main">
          <img src="./radar_logo.svg" alt="logo"></img>
          <Typography variant="h2" marginTop="7%" color="primary.main" marginBottom="20%">
            {SPONSORSPAGE_TITLE}
          </Typography>
        </Box>
      </Grid>
    </div>
  </>
);

export default Sponsorspage;
