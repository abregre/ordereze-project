import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/navbar/Navbar';
import PagesDisplay from './components/PagesDisplay';

const App = () => {
  const [pages, setPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://pagesmanagement.azurewebsites.net/api/ResponsivePages`
      );

      console.log(result.data);
      setPages(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <PagesDisplay isLoading={isLoading} pages={pages} />   
    </div>
  );
};

export default App;
