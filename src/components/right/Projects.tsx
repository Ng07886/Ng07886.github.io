import React from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import "../style/ProjectsStyle.css";

type ProjectProps = {
  name: string;
  description: string;
  techStack: string[];
};

function Projects(props: ProjectProps) {
  return (
    <Box className="project-box">
      <Typography
        className="project-name"
        variant="body2"
        fontWeight={"fontWeightBold"}
      >
        {props.name}
      </Typography>
      <Typography className="project-description" variant="body2">
        {props.description}
      </Typography>
      <Stack direction="row" spacing={2}>
        {props.techStack.map((x, index) => (
          <Typography
            className="project-tech-stack"
            variant="body2"
            key={index}
          >
            {x}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

export default Projects;
