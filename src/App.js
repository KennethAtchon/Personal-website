import './App.css';
import {API } from 'aws-amplify'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import React, {useEffect} from 'react';

function App() {
  useEffect(() => {
    fetchClient();
  })
  
  async function fetchClient(){
      API
      .get("theApi", "/client", {}).then(response => {
        console.log(`Respone: ${response.success}`)
      })
      .catch(error => {
        console.log(error.response);
      })
  }

  return (
    <>
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />

    </div>
    
    </>
  );
}

export default App;
