import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PerformanceIcon from "assets/images/performance-icon.svg";

interface props {
  title: string;
  subTitle: string;
  icon: any;
  history?: boolean;
}
export default function AppraisalCard(props: props) {
  const { title, subTitle, icon } = props;
  return (
    <Card
      sx={{
        minWidth: 275,
        width: "35px",
        borderRadius: "23.703px",
        background: "#FFF",
        boxShadow:
          "0px 10.305499076843262px 61.83299255371094px 0px rgba(226, 236, 249, 0.50)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="img" src={icon} />

        <Box
          sx={{
            // display: "flex",
            // flexDirection: "row-reverse",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              color: "#161736",
              fontStyle: "normal",
              fontWeight: 600,
            }}
            color="text.secondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: !performance ? "#CFB99F" : "#6ED097",
              fontWeight: 500,
              margin: !performance ? "1rem 0 0 0" : "",
            }}
          >
            {subTitle}
          </Typography>
          {/* <Box component="img" src={icon} /> */}
        </Box>
      </CardContent>
    </Card>
  );
}
