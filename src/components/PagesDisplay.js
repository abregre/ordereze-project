import React from 'react';
import spinner from '../assets/Spinner.gif'

import SinglePage from './SinglePage';

import './PagesDisplay.css';

const PagesDisplay = ({ pages, Loading }) => {
  return Loading ? (
    <div className="loading-container">
      <img src={spinner} alt="Loading"/>
    </div>
  ) : (
    <>
      <h1 className="pages-title">PAGES</h1>
    <div className="card-container">
      {pages.map((page) => (
        <SinglePage key={page.id} page={page} />
      ))}
    </div>
    </>
  );
};

export default PagesDisplay;
