import React, {  Component } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/navbar/Navbar';
import AddPageForm from './components/AddPageForm';
import PagesDisplay from './components/PagesDisplay';


class App extends Component {
  constructor(){
    super();
    this.state = {
      Loading: true,
      pages: []
    }
  }

  componentDidMount(){

    axios.get('https://pagesmanagement.azurewebsites.net/Api/responsivePages')
    .then(res=>{
      const pages = res.data;
      this.setState({pages,Loading:false})
    })
  }
 
  
  render(){
    const {Loading,pages}= this.state

    return (
      <div className='container'>
        <Navbar />
        <AddPageForm />
        <PagesDisplay Loading={Loading} pages={pages} />
      </div>
    );
  }
};

export default App;
