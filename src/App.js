import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://pagesmanagement.azurewebsites.net/api/responsivepages')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          pages: json,
        });
      });
  }

  render() {
    const {pages, isLoaded} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    }
    return <div className='App'>
      <ul>
        {
          pages.map(page=>(
          <li key={page.id}>{page.title}<br /> {page.description}</li>
          ))
        }
      </ul>
    </div>;
  }
}

export default App;
