import React from 'react';
import './App.css';
import About from './About';
import Info from './Info'
import Interest from './Interest';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
