import React from 'react';
import { Button } from './Button';
import './Home.css';

function Home() {
    return (
        <div className='home-container' id="top">
          <video src='dark.mp4' autoPlay loop muted />
          <h1>WELCOME</h1>
          <p>I'm Kenneth Atchon</p>
          <div className='home-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              scroll="project"
              tooffset={40}
            >
              Projects
            </Button>
          </div>
        </div>
      );
  }
  
  export default Home;