import React, { ReactElement } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs';
import { divStyle } from './constants/pagesStyles';
import {
  PATH_TO_EDUCATIONPAGE,
  PATH_TO_HOMEPAGE,
  PATH_TO_QUIZPAGE,
  PATH_TO_REPORTPAGE,
  PATH_TO_SPONSORPAGE,
} from './constants/paths';
import EducationPage from './views/EducationPage';
import FormPage from './views/FormPage';
import HomePage from './views/HomePage';
import QuizPage from './views/QuizPage';
import Sponsorspage from './views/Sponsorspage';

const paths = [
  { element: <Sponsorspage />, url: PATH_TO_SPONSORPAGE },
  { element: <FormPage />, url: PATH_TO_REPORTPAGE },
  { element: <QuizPage />, url: PATH_TO_QUIZPAGE },
  { element: <EducationPage />, url: PATH_TO_EDUCATIONPAGE },
  { element: <HomePage />, url: PATH_TO_HOMEPAGE },
];

function App(): ReactElement {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div style={divStyle}>
      {pathname !== PATH_TO_HOMEPAGE && <NavTabs view={''} />}
      <Routes>
        {paths.map((path) => (
          <Route key={path.url} path={path.url} element={path.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
