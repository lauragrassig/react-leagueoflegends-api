import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cards from './pages/cards';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Cards />
    </BrowserRouter>
  );
}

export default App;
