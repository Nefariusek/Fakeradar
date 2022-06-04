import { Tab, Tabs } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_TO_EDUCATIONPAGE, PATH_TO_HOMEPAGE, PATH_TO_QUIZPAGE, PATH_TO_REPORTPAGE } from '../constants/paths';

interface NavTabsProps {
  view: 'EDUCATION' | 'REPORT' | 'TEST' | '';
}

const NavTabs = ({ view }: NavTabsProps) => {
  return (
    <Tabs centered variant="fullWidth">
      {!(view == 'EDUCATION') && (
        <Link to={PATH_TO_EDUCATIONPAGE}>
          <Tab id="EDUCATION" label="HOW TO AVOID" />
        </Link>
      )}
      {!(view == 'REPORT') && (
        <Link to={PATH_TO_REPORTPAGE}>
          <Tab id="REPORT" label="REPORT SCAM" />
        </Link>
      )}
      {!(view == 'TEST') && (
        <Link to={PATH_TO_QUIZPAGE}>
          <Tab id="TEST" label="TEST YOUR SKILL" />
        </Link>
      )}

      <Link to={PATH_TO_HOMEPAGE}>
        <Tab label="HOME" id="HOME" />
      </Link>
    </Tabs>
  );
};
export default NavTabs;
