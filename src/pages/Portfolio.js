import React from "react";
import ProjectCard from "../components/Project";
import PortfolioContainer from "../components/PorfolioContainer";
import MusicLocator from "../images/MusicLocator.png";
import InventoryManagementSystem from "../images/InventoryManagementSystem.png";
import TeamBuilder from "../images/TeamBuilder.png";
import ReadMeGeneratorPic from "../images/ReadMeGenerator.png";
import WeatherDashboardPic from "../images/WeatherDashboard.png";
import WavMovers from "../images/WavMovers.png";

function Portfolio() {


  // WavMovers (done)
  const WavMoversProject = "WavMovers";
  const WavMoversProjectInfo =
    "An audio sample sharing platform and music education community created with the goal of enabling growing music creators. Built with React, GridFs, Auth0, Stripe, Calendly API and Material UI";
  const WavMoversProjectImage = `${WavMovers}`;
  const WavMoversProjectDeployed =
    "https://wavmovers.herokuapp.com/";
  const WavMoversProjectRepo =
    "https://github.com/Jdouville8/Audio-Sample-Sharing-Service";


  // Project 1 (done)
  const Project1 = "The Music Locator";
  const Project1Info =
    "A resource for displaying array music act information utilizing LastFM and AudioDB External APIs";
  const Project1Image = `${MusicLocator}`;
  const Project1Deployed = "https://jdouville8.github.io/DUFullStack-Project1/";
  const Project1Repo = "https://github.com/Jdouville8/DUFullStack-Project1";

  // Project 2 (done)
  const Project2 = "Asset Management System";
  const Project2Info =
    "Software to be used by equipment rental companies to manage assets. Uses MySQL relational database queries to allow for form interaction and asset tracking";
  const Project2Image = `${InventoryManagementSystem}`;
  const Project2Deployed = "https://nameless-sands-95928.herokuapp.com/";
  const Project2Repo =
    "https://github.com/pwg26/Project_2_Inventory_Management";

  // Team Profile Generator (done)
  const teamProfileGenerator = "Team Profile Generator";
  const teamProfileGeneratorInfo =
    "Interactive Node.js command-line application that enables users to populate a styled HTMl page with inputs";
  const teamProfileGeneratorImage = `${TeamBuilder}`;
  // const teamProfileGeneratorDeployed = "";
  const teamProfileGeneratorRepo =
    "https://github.com/Jdouville8/Team-Profile-Generator";

  // ReadMe Generator (done)
  const ReadMeGenerator = "ReadMe Generator";
  const ReadMeGeneratorInfo =
    'Node.js command-line app used for generator a "ReadMe" markdown file';
  const ReadMeGeneratorImage = `${ReadMeGeneratorPic}`;
  //   const ReadMeGeneratorDeployed = "https://www.linkedin.com/in/justindouville/"
  const ReadMeGeneratorRepo =
    "https://github.com/Jdouville8/HW-7-README-Generator";

  // Weather Dashboard
  const WeatherDashboard = "Weather Dashboard";
  const WeatherDashboardInfo =
    "Utilizes Open Weather API to display various weather statistics based on search query for location";
  const WeatherDashboardImage = `${WeatherDashboardPic}`;
  const WeatherDashboardDeployed =
    "https://jdouville8.github.io/HW-6-Weather-Dashboard/";
  const WeatherDashboardRepo =
    "https://github.com/Jdouville8/HW-6-Weather-Dashboard";

  

  return (
    <>
      <PortfolioContainer>
      <ProjectCard
        cardTitle={WavMoversProject}
        info={WavMoversProjectInfo}
        image={WavMoversProjectImage}
        link1={WavMoversProjectDeployed}
        link2={WavMoversProjectRepo}
      />
      <br />
        <ProjectCard
          cardTitle={Project1}
          info={Project1Info}
          image={Project1Image}
          link1={Project1Deployed}
          link2={Project1Repo}
        />
      </PortfolioContainer>
      <ProjectCard
        cardTitle={Project2}
        info={Project2Info}
        image={Project2Image}
        link1={Project2Deployed}
        link2={Project2Repo}
      />
      <br />
      <ProjectCard
        cardTitle={teamProfileGenerator}
        info={teamProfileGeneratorInfo}
        image={teamProfileGeneratorImage}
        // link1={teamProfileGeneratorDeployed}
        link2={teamProfileGeneratorRepo}
      />
      <br />
      <ProjectCard
        cardTitle={ReadMeGenerator}
        info={ReadMeGeneratorInfo}
        image={ReadMeGeneratorImage}
        // link1={ReadMeGeneratorDeployed}
        link2={ReadMeGeneratorRepo}
      />
      <br />
      <ProjectCard
        cardTitle={WeatherDashboard}
        info={WeatherDashboardInfo}
        image={WeatherDashboardImage}
        link1={WeatherDashboardDeployed}
        link2={WeatherDashboardRepo}
      />
      
      
    </>
  );
}

export default Portfolio;
