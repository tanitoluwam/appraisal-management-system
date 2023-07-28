import { Box } from "@mui/material";
import React from "react";
interface TextErrorProps {
  children?: string;
  color: string;
}
export const TextError: React.FC<TextErrorProps> = ({ children }, color) => {
  console.log(children);
  return (
    <Box
      style={{
        color: color ? color : "red",
        marginTop: "0.7rem",
        fontWeight: "bold",
      }}
    >
      {children}
    </Box>
  );
};