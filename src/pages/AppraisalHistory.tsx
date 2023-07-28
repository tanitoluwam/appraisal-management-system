import React, { useState } from "react";
import { Avatar, Box, Table, Typography } from "@mui/material";
import CustomCard from "components/CustomCard";
import CustomizedTables from "components/CustomTable";
import AppraisalCard from "components/Appraisalcard";
import StarIcon from "../assets/images/star.svg";
import CheckIcon from "../assets/images/checklist.svg";

const AppraisalHistory = () => {

  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Box
        sx={{
          display: "flex",
          //   justifyContent: "space-between",
        }}
      >
        <AppraisalCard
          title="Total appraisal"
          subTitle={"50"}
          icon={CheckIcon}
        />
        <Box sx={{ margin: "0 0 0 5rem" }}>
          <AppraisalCard
            title="Total appraisal"
            subTitle={"93"}
            icon={StarIcon}
          />
        </Box>
      </Box>

      <Box sx={{ margin: { md: "4rem 0 0 0" } }}>
        <CustomizedTables />
      </Box>
    </Box>
  );
};

export default AppraisalHistory;
