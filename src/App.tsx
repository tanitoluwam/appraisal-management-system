import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "utils/AppRoutes";
import { ThemeProvider } from "@mui/material";
import theme from "utils/theme";

function App() {
  return (
    // <div className="App">
      <AppRoutes />
    // </div>
  );
}

export default App;
