import React, { useState } from "react";
import { Avatar, Box, Table, Typography } from "@mui/material";
import CustomCard from "components/CustomCard";
import CustomizedTables from "components/CustomTable";

const Home = () => {
  const [performance, setPerformance] = useState<Boolean>(true);

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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CustomCard
          title="Performance Metrics"
          subTitle="Aggregate Score"
          performance
        />
        <CustomCard
          title="Performance Metrics"
          subTitle="Last Appraisal"
          performance
        />
        <CustomCard title="Next appraisal" subTitle="1st August 2023" />
      </Box>

      <Box sx={{margin:{md:"4rem 0 0 0"}}}>
        <Typography sx={{margin:{md:"0 0 2rem 0"}}} >Appraisal history</Typography>
        <CustomizedTables />
      </Box>
    </Box>
  );
};

export default Home;
