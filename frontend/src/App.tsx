import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useState, FormEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import './App.css';
import { divStyle } from './constants/pagesStyles';
import {
  PATH_TO_EDUCATIONPAGE,
  PATH_TO_HOMEPAGE,
  PATH_TO_QUIZPAGE,
  PATH_TO_REPORTPAGE,
  PATH_TO_SPONSORPAGE,
} from './constants/paths';

import Sponsorspage from './views/Sponsorspage';
import FormPage from './views/FormPage';
import HomePage from './views/HomePage';

const paths = [
  { element: <div>Sponsorpage</div>, url: PATH_TO_SPONSORPAGE },
  { element: <FormPage />, url: PATH_TO_REPORTPAGE },
  { element: <div>Quizpage</div>, url: PATH_TO_QUIZPAGE },
  { element: <div>Education</div>, url: PATH_TO_EDUCATIONPAGE },
  { element: <HomePage />, url: PATH_TO_HOMEPAGE },
];

function App(): ReactElement {
  const [verified, setVerified] = useState(false);

  function onReCaptchaChange(recaptchaValue: string | null) {
    console.log('OnChange - captcha value:', recaptchaValue);
    setVerified(true);
  }

  function onFormSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('OnSubmit - is verified?', verified);
  }

  return (
    <div style={divStyle}>
      <Routes>
        {paths.map((path) => (
          <Route key={path.url} path={path.url} element={path.element} />
        ))}
      </Routes>

      <Box
        component="form"
        onSubmit={onFormSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 4,
        }}
      >
        <Grid container spacing={2} gap={2}>
          <Grid item xs={12} m={4}>
            <TextField
              label="Enter link"
              name="field"
              id="field"
              variant="filled"
              required
              fullWidth
              autoFocus
              color="secondary"
            />
          </Grid>
        </Grid>

        <Grid item sx={{ minHeight: '90px' }}>
          <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} onChange={onReCaptchaChange} />
        </Grid>

        <Grid item mt={2}>
          <Button type="submit" variant="contained" color="secondary">
            Submit
          </Button>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
