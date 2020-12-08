import React, { Component } from 'react';
import axios from 'axios';
import './AddPageForm.css';

class AddPageForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      type: null,
      isActive: null,
      datePublished: null,
    };
  }
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };
  handleTypeChange = (e) => {
    this.setState({ type: e.target.value });
  };
  handleIsActiveChange = (e) => {
    this.setState({ isActive: e.target.value });
  };
  handleDatePublishedChange = (e) => {
    this.setState({ datePublished: e.target.value });
  };

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

    axios
      .post(`https://pagesmanagement.azurewebsites.net/Api/responsivePages`, {
        page
      })
      .then((res) => {    
        console.log(res);
        console.log(res.data);
      })
      .catch(err=>console.log(err))
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
            <p>Type</p>
            <input
              type='radio'
              name='type'
              id='type0'
              value='0'
              checked={this.state.type === '0'}
              onChange={this.handleTypeChange}
            />
            <label htmlFor='type0'>0</label>
            <input
              type='radio'
              name='type'
              id='type1'
              value='1'
              checked={this.state.type === '1'}
              onChange={this.handleTypeChange}
            />
            <label htmlFor='type1'>1</label>
          </div>
          <div className='form-group'>
            <p>Page is active</p>
            <input
              type='radio'
              name='isActive'
              id='active'
              checked={this.state.type === 'true'}
              onChange={this.handleIsActiveChange}
            />
            <label htmlFor='active'>True</label>
            <input
              type='radio'
              name='isActive'
              id='notActive'             
              checked={this.state.type === 'false'}
              onChange={this.handleIsActiveChange}
            />
            <label htmlFor='notActive'>False</label>
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
