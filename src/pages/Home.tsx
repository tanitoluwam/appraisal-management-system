import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import CustomCard from "components/CustomCard";

const Home = () => {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Box sx={{ marginLeft: "15px" }}>
          <Typography
            sx={{
              color: "#161736",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            Good Evening Jane
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "#7D8DA6" }}>
            Department: Sales Job title: Sales analyst
          </Typography>
        </Box>
      </Box>
      <CustomCard />
    </Box>
  );
};

export default Home;
