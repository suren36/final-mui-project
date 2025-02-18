import React from 'react';
import { Box, Typography } from "@mui/material";

export const ContentItem = ({ title, description, img, swap }) => {
  return (
    <Box 
      display="flex" 
      flexDirection={swap ? "row-reverse" : "row"} 
      bgcolor={swap ? "#f9f9f9" : "#fff"}
      padding={10} 
      justifyContent="space-between" 
      alignItems="center"
    >
      <Box flex={1} padding={3}>
        <Typography fontFamily={
          "cursive"
        }
        fontStyle={'italic'} variant="h3" color="primary">
          {title}
        </Typography>
        <Typography variant="h5" color="#838383">
          {description}
        </Typography>
      </Box>
      <Box flex={1} display="flex" justifyContent="center">
        <img
          src={img}
          alt={title}
          loading="lazy"
          style={{ boxShadow: "10px 10px 20px #ccc", height: "300px",borderRadius:"10px" }}
        />
      </Box>
    </Box>
  );
};

export default ContentItem;
