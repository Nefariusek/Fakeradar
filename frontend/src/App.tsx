import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PATH_TO_CREDITS, PATH_TO_HOMEPAGE } from './constants/paths';

const paths = [
  { element: <div>Creditspage</div>, url: PATH_TO_CREDITS },
  { element: <div>Homepage</div>, url: PATH_TO_HOMEPAGE },
];

function App(): ReactElement {
  return (
    <Routes>
      {paths.map((path) => (
        <Route key={path.url} path={path.url} element={path.element} />
      ))}
    </Routes>
  );
}

export default App;
