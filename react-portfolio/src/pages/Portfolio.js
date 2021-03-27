import React from 'react';
import ProjectCard from '../components/Project'
import PortfolioContainer from '../components/PorfolioContainer';

function Portfolio() {

    // Project 1 (done)
    const Project1 = "The Music Locator"
    const Project1Info = "A resource for displaying array music act information utilizing LastFM and AudioDB External APIs"
    const Project1Image = ""
    const Project1Deployed = "https://jdouville8.github.io/DUFullStack-Project1/"
    const Project1Repo = "https://github.com/Jdouville8/DUFullStack-Project1"

    // Project 2 (done)
    const Project2 = "Asset Management System"
    const Project2Info = "Software to be used by equipment rental companies to manage assets. Uses MySQL relational database queries to allow for form interaction and asset tracking"
    const Project2Image = ""
    const Project2Deployed = "https://nameless-sands-95928.herokuapp.com/"
    const Project2Repo = "https://github.com/pwg26/Project_2_Inventory_Management"

    // Team Profile Generator (done)
  const teamProfileGenerator = "Team Profile Generator"
  const teamProfileGeneratorInfo = "Interactive Node.js command-line application that enables users to populate a styled HTMl page with inputs"
  const teamProfileGeneratorImage = ""
  const teamProfileGeneratorDeployed = ""
  const teamProfileGeneratorRepo = "https://github.com/Jdouville8/Team-Profile-Generator"

    // ReadMe Generator (done)
  const ReadMeGenerator = "ReadMe Generator"
  const ReadMeGeneratorInfo = 'Node.js command-line app used for generator a "ReadMe" markdown file'
  const ReadMeGeneratorImage = ""
//   const ReadMeGeneratorDeployed = "https://www.linkedin.com/in/justindouville/"
  const ReadMeGeneratorRepo = "https://github.com/Jdouville8/HW-7-README-Generator"
  
    // Weather Dashboard 
  const WeatherDashboard = "Weather Dashboard"
  const WeatherDashboardInfo = "Utilizes Open Weather API to display various weather statistics based on search query for location"
  const WeatherDashboardImage = ""
  const WeatherDashboardDeployed = "https://jdouville8.github.io/HW-6-Weather-Dashboard/"
  const WeatherDashboardRepo = "https://github.com/Jdouville8/HW-6-Weather-Dashboard"

    // Workday Scheduler (done)
  const WorkdayScheduler = "Workday Scheduler"
  const WorkdaySchedulerInfo = "Calendar event scheduling tool with data persistence upon refresh constructed using javascript and bootstrap"
  const WorkdaySchedulerImage = ""
  const WorkdaySchedulerDeployed = "https://jdouville8.github.io/HW-5-Workday-Scheduler/"
  const WorkdaySchedulerRepo = "https://github.com/Jdouville8/HW-5-Workday-Scheduler"

    

    return (
    <>
    <PortfolioContainer>
    <ProjectCard
    cardTitle={Project1} 
    info={Project1Info} 
    image={Project1Image} 
    link1={Project1Deployed} 
    link2={Project1Repo}/>
     </PortfolioContainer>
    <ProjectCard
    cardTitle={Project2} 
    info={Project2Info} 
    image={Project2Image} 
    link1={Project2Deployed} 
    link2={Project2Repo}/>
    <br/>
    <ProjectCard
    cardTitle={teamProfileGenerator} 
    info={teamProfileGeneratorInfo} 
    image={teamProfileGeneratorImage} 
    link1={teamProfileGeneratorDeployed} 
    link2={teamProfileGeneratorRepo}/>
<br/>
    <ProjectCard
    cardTitle={ReadMeGenerator} 
    info={ReadMeGeneratorInfo} 
    image={ReadMeGeneratorImage} 
    // link1={ReadMeGeneratorDeployed} 
    link2={ReadMeGeneratorRepo}/>
<br/>
    <ProjectCard
    cardTitle={WeatherDashboard} 
    info={WeatherDashboardInfo} 
    image={WeatherDashboardImage} 
    link1={WeatherDashboardDeployed} 
    link2={WeatherDashboardRepo}/>
<br/>
    <ProjectCard
    cardTitle={WorkdayScheduler} 
    info={WorkdaySchedulerInfo} 
    image={WorkdaySchedulerImage} 
    link1={WorkdaySchedulerDeployed} 
    link2={WorkdaySchedulerRepo}/>


   
    </>
    )
  }

  export default Portfolio