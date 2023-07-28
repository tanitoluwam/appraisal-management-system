import AppraisalHistory from "pages/AppraisalHistory";
import Home from "pages/Home";
import SharedLayout from "pages/SharedLayout";
// import SharedLayout from "pages/SharedLayout";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function DvaultRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/appraisal/" element={<AppraisalHistory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default DvaultRoutes;
