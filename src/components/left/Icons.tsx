import React from "react";
import { Box, Paper, Stack, Link } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../style/Icons.css";

function Icons() {
  return (
    <Box className="icons">
      <Stack direction="row" spacing={2} justifyContent="center">
        <Link href="../data/Resume-Noel-Gon.pdf">
          <AssignmentIcon sx={{ color: "#eff1e4" }} fontSize="large" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/noel-gonzalez-94408316b"
          type="button"
        >
          <LinkedInIcon sx={{ color: "#eff1e4" }} fontSize="large" />
        </Link>
        <Link type="button" href="https://github.com/Ng07886">
          <GitHubIcon sx={{ color: "#eff1e4" }} fontSize="large" />
        </Link>
      </Stack>
    </Box>
  );
}

export default Icons;
