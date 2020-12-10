import React, { Component } from 'react';
import axios from 'axios';
import './AddPageForm.css';

class AddPageForm extends Component {
  constructor() {
    super();
    this.state = {
      Title: '',
      Description: '',
      Type: 0,
      IsActive: true,
      PublishedOn: '',
    };
  }
  // Form inputs events
  handleTitleChange = (e) => {
    this.setState({ Title: e.target.value });
  };
  handleDescriptionChange = (e) => {
    this.setState({ Description: e.target.value });
  };
  handleTypeChange = (e) => {
    this.setState({ Type: parseInt(e.target.value) });
  };
  handleIsActiveChange = (e) => {
    let updatedValue = e.target.value === 'true';
    this.setState({ IsActive: updatedValue });
  };
  handleDatePublishedChange = (e) => {
    this.setState({ PublishedOn: e.target.value });
  };
  //Submit Event
  handleSubmit = (e) => {
    e.preventDefault();
    const { Title, Description, Type, IsActive, PublishedOn } = this.state;
    const page = {
      Title,
      Description,
      Type,
      IsActive,
      PublishedOn,
    };
    console.log(page);
    axios
      .post(
        `https://pagesmanagement.azurewebsites.net/Api/responsivePages`,
        page
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.handleSubmit} className='add-form'>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              onChange={this.handleTitleChange}
              value={this.state.Title}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              type='text'
              name='description'
              onChange={this.handleDescriptionChange}
              value={this.state.Description}
            />
          </div>
          <div className='form-group'>
            <p>Page Type</p>
            <div className='custom-select'>
              <select
                name='type'
                id='type'
                value={this.state.value}
                onChange={this.handleTypeChange}>
                <option value='0'>Menu</option>
                <option value='1'>Events</option>
                <option value='2'>Content</option>
              </select>
              <span className='custom-arrow'></span>
            </div>
          </div>
          <div className='form-group'>
            <p>Page is active</p>
            <div className='custom-select'>
              <select
                name='isActive'
                id='isActive'
                value={this.state.value}
                onChange={this.handleIsActiveChange}>
                <option value='true'>Active</option>
                <option value='false'>Not Active</option>
              </select>
              <span className='custom-arrow'></span>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='publishedOn'>Publish Date</label>
            <input
              type='date'
              name='publishedOn'
              id='publishedOn'
              value={this.state.PublishedOn}
              onChange={this.handleDatePublishedChange}
            />
          </div>
          <button type='submit'>Add Page</button>
        </form>
      </div>
    );
  }
}

export default AddPageForm;
