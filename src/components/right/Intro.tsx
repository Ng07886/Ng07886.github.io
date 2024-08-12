import React from "react";
import { Box, Typography } from "@mui/material";
import "../style/introStyle.css";

function Intro() {
  return (
    <Box className="intro" >
      <Typography variant="body2">
        I am a Software Engineer with 3 years of experience, proficient in
        React. I have contributed to developing NCR Voyix’s advanced restaurant
        online ordering web application, using a tech stack that includes
        React.js, TypeScript, React Hook Forms, Redux Toolkit, and Material-UI.I
        have also successfully designed and developed over 20 custom websites
        tailored to clients' unique specifications, achieving a 5-star rating
        and maintaining a 100% customer satisfaction record. In my free time, I
        enjoy working out,playing soccer and working on cars. My fun fact is
        that I only havae to wear one contact because only one of my eyes has
        really bad vision.
      </Typography>
    </Box>
  );
}

export default Intro;
