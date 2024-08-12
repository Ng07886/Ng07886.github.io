import React from "react";
import { Breadcrumbs, Link, Typography, Stack } from "@mui/material";
import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
