import React, { useState, useEffect } from "react";
import TitleAndPhoto from "./left/TitleAndPhoto";
import Intro from "./right/Intro";
import ResumeEntry from "./right/ResumeEntry";
import Projects from "./right/Projects";
import Icons from "./left/Icons";
import Articles from "./right/Articles";
import { Box, Typography } from "@mui/material";
import ResumeInfo from "../data/ResumeInfo";
import ProjectsInfo from "../data/Projects";
import ArticleInfo from "../data/ArticleInfo";
import Navigation from "../components/left/Navigation";
import party from "../images/party.json";
import Lottie from "lottie-react";
import "./style/MainContainer.css";

function MainContainer() {
  const [partyTime, setpartyTime] = useState(false);

  useEffect(() => {
    const partyTimer = setTimeout(() => {
      setpartyTime(false);
    }, 3000);

    return () => clearTimeout(partyTimer);
  }, [partyTime]);

  return (
    <div>
      {partyTime && (
        <Box className="party-time">
          <Lottie animationData={party} />
        </Box>
      )}
      <Box className="container">
        <Box className="left-box">
          <TitleAndPhoto />
          <Icons />
          <Navigation setPartyTime={setpartyTime} />
        </Box>
        <Box className="right-box">
          <Box className="intro-box" id="intro">
            <Box className="section-header">
              <Typography variant="h5" id="resume">
                About Me
              </Typography>
            </Box>
            <Intro />
          </Box>

          <Box className="resume-entry-box">
            {ResumeInfo.map((entry, index) => (
              <>
                {index === 0 && (
                  <Box className="section-header">
                    <Typography variant="h5" id="resume">
                      Experience
                    </Typography>
                  </Box>
                )}
                <ResumeEntry
                  date={entry.date}
                  title={entry.title}
                  link={entry.link}
                  description={entry.description}
                  key={index}
                />
              </>
            ))}
          </Box>
          <Box className="projects-box">
            {ProjectsInfo.map((project, index) => (
              <>
                {index === 0 && (
                  <Box className="section-header">
                    <Typography variant="h5" id="projects">
                      Projects
                    </Typography>
                  </Box>
                )}
                <Projects
                  name={project.Name}
                  description={project.Description}
                  techStack={project.TechStack}
                  key={index}
                />
              </>
            ))}
          </Box>
          <Box className="articles-box">
            {ArticleInfo.map((article, index) => (
              <>
                {index === 0 && (
                  <Box className="section-header">
                    <Typography variant="h5" id="articles">
                      Favorite Articles
                    </Typography>
                  </Box>
                )}
                <Articles
                  name={article.name}
                  link={article.link}
                  description={article.description}
                  key={index}
                />
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default MainContainer;
