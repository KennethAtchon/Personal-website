import React from 'react';
import './About.css';
import { Button } from './Button';

function About() {

    return (
        <div className='about-container' id='about'>
          <h1>ABOUT ME
          </h1>
          <p>I got interested in coding in the summer of 2020. It was during the pandemic and I was about to graduate from high school. My first experience with coding was a python coding bootcamp on Udemy. The instructor taught me the basics of programming like data types, for loops, if statements, and many more concepts. Now, I code mainly with node js and html/css. I built this website using React framework. I have used SQL and Mongodb to make a database for my discord bot projects and my bug tracker website project. I also use Hackerrank and LeetCode to practice Java, C++, and Python. </p>

          <div className="about-text">Skills</div>

          <div className="about-skills">
          <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              Java
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              C++
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              Html/CSS
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              SQL
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              Node JavaScript
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              React JS
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              AWS Amplify
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              MongoDB
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              Express JS
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              Bootstrap
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              cursor='default'
            >
              Git
            </Button>




          </div>


        </div>
        
      );
  }
  
  export default About;