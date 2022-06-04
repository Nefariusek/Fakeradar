import { Box, Button, Grid, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import NavTabs from '../components/NavTabs';
import { CODERSCAMP_LOGO, LIVECHAT_LOGO } from '../constants/logosUrls';
import { sponsorsDivStyle } from '../constants/pagesStyles';
import { PATH_TO_HOMEPAGE } from '../constants/paths';
import { CODERSCAMP_URL, LIVECHAT_URL } from '../constants/sponsorsUrls';
import { SPONSORSPAGE_TITLE } from '../constants/strings';

const Sponsorspage: React.FunctionComponent = (): ReactElement => (
  <>
    <NavTabs view="" />
    <div style={sponsorsDivStyle}>
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
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        min-height="100%"
        width="100%"
      >
        <Box textAlign="center" color="primary.main">
          <img src="./radar_logo.svg" alt="logo"></img>
          <Typography variant="h2" marginTop="7%" color="primary.main" marginBottom="10%">
            {SPONSORSPAGE_TITLE}
          </Typography>
        </Box>
        <a href={CODERSCAMP_URL} target="_blank">
          <img src={CODERSCAMP_LOGO} alt="LiveChat" />
        </a>
        <a href={LIVECHAT_URL} target="_blank">
          <img
            src={LIVECHAT_LOGO}
            alt=".CodersCamp"
            style={{
              marginTop: '1%',
            }}
          />
        </a>
      </Grid>
    </div>
  </>
);

export default Sponsorspage;
