import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './Components/ContactUsForm';
import ContactUsHero from './Components/ContactUsHero';


function App() {
  return (
    <div className="container container-fluid">
      
      <ContactUsHero/>
      <ContactUs/>
      
      
    </div>
  );
}

export default App;
