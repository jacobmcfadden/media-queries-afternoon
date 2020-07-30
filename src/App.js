import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Masterhead from './components/Masterhead';

import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team';


import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Masterhead/>
          <Services/>
          <Portfolio/>
          
          <About/>
          <Team/>
          <Clients/>
          <Contact/>
          <Footer></Footer>
          
      </div>
    );
  }
}

export default App;
