import React from "react";
import { Typography, Box } from "@mui/material";
import "../style/titleAndPhotoStyle.css";

function TitleAndPhoto() {
  return (
    <Box className="title-and-photo">
      <Typography className="name" variant="h4">
        Noel Gonzalez
      </Typography>
      <Typography className="position" variant="h5">
        Software Engineer
      </Typography>
      <img width="300px" alt="me" src={require("../../images/me.png")} />
    </Box>
  );
}

export default TitleAndPhoto;
