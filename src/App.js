import logo from './logo.svg';

import React from 'react';
import { Categories, Food, Hero, Navbar, TopLevelCards } from './components';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <TopLevelCards />
      <Food />
      <Categories />
    </div>
  );
}

export default App;
