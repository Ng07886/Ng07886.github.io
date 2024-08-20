import React, { Dispatch } from "react";
import { Link, Stack, Box } from "@mui/material";
import Lottie from "lottie-react";
import parrot from "../../images/parrot.json";
import "../style/MainContainer.css";

type navigationProps = {
  setPartyTime: Dispatch<React.SetStateAction<boolean>>;
};

function Navigation(props: navigationProps) {
  const handleOnCLick = () => {
    props.setPartyTime(true);
  };

  return (
    <>
      <Stack spacing={3} sx={{ marginTop: "20px" }}>
        <Link underline="hover" color="inherit" href="#intro">
          About
        </Link>
        <Link underline="hover" color="inherit" href="#resume">
          Experience
        </Link>
        <Link underline="hover" color="inherit" href="#projects">
          Projects
        </Link>
        <Link underline="hover" color="inherit" href="#articles">
          Articles
        </Link>
        <Box className="lottie-link">
          <button className="lottie-button" onClick={handleOnCLick}>
            <Lottie animationData={parrot} />
          </button>
        </Box>
      </Stack>
    </>
  );
}

export default Navigation;
