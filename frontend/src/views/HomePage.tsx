import React, { ReactElement } from 'react';
import { Typography } from '@mui/material';

const HomePage: React.FunctionComponent = (): ReactElement => {
  return (
    <>
      <Typography variant="h1">FakeRADAR</Typography>
      <Typography variant="h4">"Beware of false knowledge, it is more dangerous than ignorance</Typography>
    </>
  );
};
export default HomePage;
