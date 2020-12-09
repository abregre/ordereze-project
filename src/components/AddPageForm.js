import React, { Component } from 'react';
import axios from 'axios';
import './AddPageForm.css';

class AddPageForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      type: 0,
      isActive: '',
      datePublished: null,
    };
  }
  // Form inputs events
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };
  handleTypeChange = (e) => {
    this.setState({ type: parseInt(e.target.value) });
  };
  handleIsActiveChange = (e) => {
    let updatedValue = e.target.value;
    if (updatedValue === 'true' || updatedValue === 'false') {
      updatedValue = Boolean(updatedValue);
    }
    this.setState({ isActive: updatedValue });
  };
  handleDatePublishedChange = (e) => {
    this.setState({ datePublished: new Date(e.target.value).toISOString() });
  };
  //Submit Event
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, type, isActive, datePublished } = this.state;
    const page = {
      title,
      description,
      type,
      isActive,
      datePublished,
    };
    console.log(page);
    axios.post(
      `https://pagesmanagement.azurewebsites.net/Api/responsivePages`,
      {
        page,
      }
    )
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
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
              value={this.state.title}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              type='text'
              name='description'
              onChange={this.handleDescriptionChange}
              value={this.state.description}
            />
          </div>
          <div className='form-group'>
            <p>Page Type</p>
            <select
              name='type'
              id='type'
              value={this.state.value}
              onChange={this.handleTypeChange}>
              <option value='0'>Menu</option>
              <option value='1'>Events</option>
              <option value='2'>Content</option>
            </select>
          </div>
          <div className='form-group'>
            <p>Page is active</p>
            <select
              name='isActive'
              id='isActive'
              value={this.state.value}
              onChange={this.handleIsActiveChange}>
              <option value='true'>Active</option>
              <option value='false'>Not Active</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='datePublished'>Publish Date</label>
            <input
              type='date'
              name='datePublished'
              id='datePublished'
              value={this.state.date}
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
