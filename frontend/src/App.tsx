import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {
  PATH_TO_EDUCATIONPAGE,
  PATH_TO_HOMEPAGE,
  PATH_TO_QUIZPAGE,
  PATH_TO_REPORTPAGE,
  PATH_TO_SPONSORPAGE,
} from './constants/paths';

const paths = [
  { element: <div>Sponsorpage</div>, url: PATH_TO_SPONSORPAGE },
  { element: <div>Reportpage</div>, url: PATH_TO_REPORTPAGE },
  { element: <div>Quizpage</div>, url: PATH_TO_QUIZPAGE },
  { element: <div>Education</div>, url: PATH_TO_EDUCATIONPAGE },
  { element: <div>Homepage</div>, url: PATH_TO_HOMEPAGE },
];

function App(): ReactElement {
  return (
    <div>
      <Routes>
        {paths.map((path) => (
          <Route key={path.url} path={path.url} element={path.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
