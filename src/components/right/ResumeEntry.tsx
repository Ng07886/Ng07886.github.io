import React from "react";
import { Box, Typography } from "@mui/material";
import "../style/ResumeEntryStyle.css";

type ResumeEntryProp = {
  date: string;
  title: string;
  link: string;
  description: string;
};

function ResumeEntry(props: ResumeEntryProp) {
  const handleClick = () => {
    window.location.href = props.link;
  };
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      className={isHovered ? "resume-box-hovered" : "resume-box"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Box className="date">
        <Typography variant="body2" fontWeight={"fontWeightBold"}>
          {props.date}
        </Typography>
      </Box>
      <Box className="title-and-description">
        <Typography
          className="title"
          variant="body2"
          fontWeight={"fontWeightBold"}
        >
          {props.title}
        </Typography>

        <Typography className="description" variant="body2">
          {props.description}
        </Typography>
      </Box>

      <Box className="skills"></Box>
    </Box>
  );
}

export default ResumeEntry;
