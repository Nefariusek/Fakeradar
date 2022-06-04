import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { SPONSORSPAGE_TITLE } from '../constants/strings';
import { divStyle } from '../constants/pagesStyles';
import { PATH_TO_HOMEPAGE } from '../constants/paths';
import { Link } from 'react-router-dom';

const Sponsorspage: React.FunctionComponent = (): ReactElement => (
  <div style={divStyle}>
    <Button
      component={Link}
      to={PATH_TO_HOMEPAGE}
      size="large"
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
      }}
    >
      BACK TO RADAR
    </Button>
    <Grid container direction="column" justifyContent="space-around" alignItems="center" min-height="100%">
      <Box textAlign="center" color="primary.main">
        <img src="./radar_logo.svg" alt="logo"></img>
        <Typography variant="h2" marginTop="7%" color="primary.main" marginBottom="20%">
          {SPONSORSPAGE_TITLE}
        </Typography>
      </Box>
    </Grid>
  </div>
);

export default Sponsorspage;
