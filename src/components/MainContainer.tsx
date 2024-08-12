import React from "react";
import TitleAndPhoto from "./left/TitleAndPhoto";
import Intro from "./right/Intro";
import ResumeEntry from "./right/ResumeEntry";
import Projects from "./right/Projects";
import Icons from "./left/Icons";
import Articles from "./right/Articles";
import { Box } from "@mui/material";
import ResumeInfo from "../data/ResumeInfo";
import ProjectsInfo from "../data/Projects";
import ArticleInfo from "../data/ArticleInfo";
import Navigation from "../components/left/Navigation";
import "./style/MainContainer.css";

function MainContainer() {
  return (
    <div>
      <Box className="container">
        <Box className="left-box">
          <TitleAndPhoto />
          <Icons />
          <Navigation />
        </Box>
        <Box className="right-box">
          <Box className="intro-box" id="intro">
            <Intro />
          </Box>
          <Box className="resume-entry-box" id="resume">
            {ResumeInfo.map((entry, index) => (
              <ResumeEntry
                date={entry.date}
                title={entry.title}
                link={entry.link}
                description={entry.description}
                key={index}
              />
            ))}
          </Box>
          <Box className="projects-box" id="projects">
            {ProjectsInfo.map((project, index) => (
              <Projects
                name={project.Name}
                description={project.Description}
                techStack={project.TechStack}
                key={index}
              />
            ))}
          </Box>
          <Box className="articles-box" id="articles">
            {ArticleInfo.map((article, index) => (
              <Articles
                name={article.name}
                link={article.link}
                description={article.description}
                key={index}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default MainContainer;
