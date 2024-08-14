import React from "react";
import { Link, Stack } from "@mui/material";

function Navigation() {
  return (
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
    </Stack>
  );
}

export default Navigation;
