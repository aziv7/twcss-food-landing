import logo from './logo.svg';

import React from 'react';
import { Food, Hero, Navbar, TopLevelCards } from './components';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <TopLevelCards />
      <Food />
    </div>
  );
}

export default App;
