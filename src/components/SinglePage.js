import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './SinglePage.css';

class SinglePage extends Component {
  constructor(props) {
    super(props);
  }
  getPages = async () => {
    let data = await axios
      .get('https://pagesmanagement.azurewebsites.net/Api/responsivePages')
      .then(({ data }) => data);
  };

 
  deletePage = async () => {
    await axios.delete(
      `https://pagesmanagement.azurewebsites.net/Api/responsivePages/${this.props.page.id}`
    );
    this.getPages();
  };
  render() {
    const { page } = this.props;
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
          <Link to={`/edit/${page.id}`} className='btn'>
            Edit
          </Link>
          <button className='btn' onClick={this.deletePage}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default SinglePage;
