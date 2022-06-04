import { Container } from '@mui/material';
import React, { ReactElement } from 'react';
import SponsorButtons from './SposorButtons';

const Sponsorspage: React.FunctionComponent = (): ReactElement => (
  <Container>
    <p>this is sponsorspage</p>
    <SponsorButtons />
  </Container>
);

export default Sponsorspage;
