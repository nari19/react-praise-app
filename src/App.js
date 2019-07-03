import React from 'react';
import './assets/style/App.scss';

import Header from './views/Header.js';
import Container from './views/content/Container';
import Footer from './views/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;