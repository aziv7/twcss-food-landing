import logo from './logo.svg';

import React from 'react';
import { Hero, Navbar, TopLevelCards } from './components';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <TopLevelCards />
    </div>
  );
}

export default App;
