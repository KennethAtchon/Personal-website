import React from 'react';
import './Project.css';
import YoutubeEmbed from './YouTubeEmbed';

function Project() {

    return (
        <div className='project-container' id='project'>
          <h1>PROJECTS
          </h1>
          <p> Bug Tracker Project</p>

          <div className="project-text">I built a Bug Tracker Website with node JS, mongoDB, and a bootstrap template. I used the boostrap template to create the website. I used MongoDB for my database and Node JS for the backend. The Bug Tracker has a login page, reset password, home page, projects page, and many other pages.</div>

          <YoutubeEmbed embedId="-Lw5DzIFd9Q"></YoutubeEmbed>
          <YoutubeEmbed embedId="3KU5Z8u8xPM"></YoutubeEmbed>

          <p> Chat Website Project </p>

          <div className="project-text">I built a Chat Website with MERN stack. MERN stands for MongoDB, ExpressJS, ReactJs, and NodeJS. The website allows users to create an account, add their friends and message their friends. You can delete friends and reject friend requests.</div>

          <YoutubeEmbed embedId="FSyqBvhSiJw"></YoutubeEmbed>
          <YoutubeEmbed embedId="EnQjTdcDLds"></YoutubeEmbed>
          <YoutubeEmbed embedId="oXmAwVbAAEI"></YoutubeEmbed>
          




        </div>
        
      );
  }
  
  export default Project;