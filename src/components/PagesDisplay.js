import React from 'react';

import SinglePage from './SinglePage';

import './PagesDisplay.css';

const PagesDisplay = ({ pages, isLoading }) => {
  return isLoading ? (
    <h2>Loading</h2>
  ) : (
    <div className="card-container">
      {pages.map((page) => (
        <SinglePage key={page.id} page={page} />
      ))}
    </div>
  );
};

export default PagesDisplay;
