import React from 'react';
import { Button } from '@material-ui/core';
import CardSm from '../components/CardSm'
import CardMd from '../components/CardMd'
import PortfolioContainer from '../components/PorfolioContainer';
import Grid from '@material-ui/core/Grid';
import Col from '../components/Col';

function About() {
  const aboutMe = "About Me"
  const aboutMeInfo = "My Name is Justin Douville. I am an electronic music creator and aspiring audio software engineer. My passion lies in music production education, pushing others to increase efficiency of workflow is a central ideology of my approach towards teaching. Being at the forefront of creating cutting edge technologies and subsequently helping others to integrate new techniques to push their own creative potential is my ultimate goal."
  const linkedIn = "https://www.linkedin.com/in/justindouville/"
  const github = "https://github.com/Jdouville8"
    return (
    <>
    <PortfolioContainer>
    <CardMd
    cardTitle={aboutMe} 
    info={aboutMeInfo} 
    link1={linkedIn} 
    link2={github}/>
    <CardSm/>
    </PortfolioContainer>
    </>
    )
  }

  export default About