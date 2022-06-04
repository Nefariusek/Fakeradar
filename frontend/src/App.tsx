
import React, { FormEvent, ReactElement, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { divStyle } from './constants/pagesStyles';
import {
  PATH_TO_EDUCATIONPAGE,
  PATH_TO_HOMEPAGE,
  PATH_TO_QUIZPAGE,
  PATH_TO_REPORTPAGE,
  PATH_TO_SPONSORPAGE,
} from './constants/paths';
import FormPage from './views/FormPage';
import HomePage from './views/HomePage';
import Sponsorspage from './views/Sponsorspage';

const paths = [
  { element: <Sponsorspage />, url: PATH_TO_SPONSORPAGE },
  { element: <FormPage />, url: PATH_TO_REPORTPAGE },
  { element: <div>Quizpage</div>, url: PATH_TO_QUIZPAGE },
  { element: <div>Education</div>, url: PATH_TO_EDUCATIONPAGE },
  { element: <HomePage />, url: PATH_TO_HOMEPAGE },
];

function App(): ReactElement {
  return (
    <div style={divStyle}>
      <Routes>
        {paths.map((path) => (
          <Route key={path.url} path={path.url} element={path.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
