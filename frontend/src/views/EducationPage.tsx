import React, { ReactElement } from 'react';
import { divStyle } from '../constants/pagesStyles';
import { Box } from '@mui/system';
import { TITLE, PHISHING_ARRAY } from '../constants/strings';
import { Typography, Grid, Card, CardContent } from '@mui/material';
// import ReactPlayer from 'react-player';

// const VideoPlayer = () => {
//   return (
//     <div style={{ marginLeft: 20 }}>
//       <ReactPlayer url="https://www.youtube.com/watch?v=4o5hSxvN_-s" controls />
//     </div>
//   );
// };

const EductionPage: React.FunctionComponent = (): ReactElement => {
  const phishingExamples = PHISHING_ARRAY;
  return (
    <div style={divStyle}>
      <Grid container direction="row" justifyContent="center" gap="50px" alignItems="center" min-height="100%">
        <img src="./radar_logo.svg" alt="logo"></img>
        <Box textAlign="center">
          <Typography variant="h1" color="info.main" fontWeight="550">
            {TITLE}
          </Typography>
        </Box>
      </Grid>
      <Grid style={{ marginTop: 20 }} container justifyContent="center">
        <img src="./graph_phising.png" alt="graph"></img>
      </Grid>
      <Grid
        container
        sx={{ padding: 3 }}
        direction="column"
        justifyContent="space-between"
        spacing={3}
        alignItems="start"
      >
        {phishingExamples.map((phishingExample, index) => (
          <Grid style={{ minWidth: '100%' }} item xs={1} key={index}>
            <Card style={{ minWidth: '100%', padding: 20 }}>
              <CardContent>
                <Typography sx={{ fontSize: 24 }} color="main.primary">
                  {phishingExample}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* <VideoPlayer /> */}
    </div>
  );
};
export default EductionPage;
