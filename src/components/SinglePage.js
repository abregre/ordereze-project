import React from 'react';

import './SinglePage.css';

const SinglePage = ({ page }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>{page.title}</h2>
        <h2>ID: {page.id}</h2>
      </div>
      <p>{page.description ? page.description : 'Page has no description'}</p>
      <p>Page type : {page.type}</p>
      <p>Page {page.isActive ? 'is' : 'is not'} active</p>
      <span>Page published on {page.publishedOn}</span>
      <div className='btn-group'>
        {/* <a href="#" className="btn">Edit</a>
        <a href="#" className="btn">Delete</a> */}
      </div>
    </div>
  );
};

export default SinglePage;
