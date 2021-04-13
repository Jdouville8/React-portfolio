import React from 'react';
import CardSm from '../components/CardSm'
import NoImgCardMd from '../components/NoImgCardMd'
import ContactForm from '../components/ContactForm'

import PortfolioContainer from '../components/PorfolioContainer';

function Contact() {
  const contact = "Contact"
  const aboutMeInfo = "My Name is Justin Douville. I am an electronic music creator and aspiring audio software engineer. My passion lies in music production education, pushing others to increase efficiency of workflow is a central ideology of my approach towards teaching. Being at the forefront of creating cutting edge technologies and subsequently helping others to integrate new techniques to push their own creative potential is my ultimate goal."
  const linkedIn = "https://www.linkedin.com/in/justindouville/"
  const github = "https://github.com/Jdouville8"
    return (
    <>
    <div style={{height: '100vh'}}>
    <PortfolioContainer>
    <NoImgCardMd
    cardTitle={contact} 
    // info={aboutMeInfo} 
    link1={linkedIn} 
    link2={github}/>
    <div style={{backgroundColor: 'white'}}>
    <ContactForm />
    </div>
    </PortfolioContainer>
    </div>
    </>
    )
  }

  export default Contact