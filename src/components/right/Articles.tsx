import React from "react";
import { Box, Typography } from "@mui/material";
import "../style/Articles.css";

type ArticleProps = {
  name: string;
  link: string;
  description: string;
};

function Articles(props: ArticleProps) {
  const handleClick = () => {
    window.location.href = props.link;
  };
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      className={isHovered ? "article-box-hovered" : "article-box"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Typography
        className="article-name"
        variant="body2"
        fontWeight={"fontWeightBold"}
      >
        {props.name}
      </Typography>
      <Typography className="article-description" variant="body2">
        {props.description}
      </Typography>
    </Box>
  );
}

export default Articles;
