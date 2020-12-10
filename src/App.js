import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Navbar from './components/navbar/Navbar';
import AddPageForm from './components/AddPageForm';
import EditPage from './components/EditPage';
import PagesDisplay from './components/PagesDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Loading: true,
      pages: [],
    };
    this.getPages();
  }

  componentDidMount() {
    this.getPages()
  }
  getPages = async () => {
    let data = await axios
      .get('https://pagesmanagement.azurewebsites.net/Api/responsivePages')
      .then(({ data }) => data);
    this.setState({ pages: data, Loading: false });
  };

  render() {
    const { Loading, pages } = this.state;

    return (
      <Router>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route
              path='/'
              exact
              render={() => <PagesDisplay Loading={Loading} pages={pages} deletePage={this.deletePage}/>}
            />
            <Route path='/add' component={AddPageForm} />
            <Route
              path='/edit/:id'
              render={(props) => <EditPage {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
