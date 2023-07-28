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

        {/* <Route
          path={"/"}
          element={
            <ProtectedRoutes>
              <SharedLayout />
            </ProtectedRoutes>
          }
        > */}
        {/* <Route index element={<Dashboard />} />
          <Route path="/terminals" element={<AllTerminalList />} />

          // <Route path="/transactions/" element={<TransactionList />} />

          <Route path="/transactions/:id" element={<TransactionHistory />} />
          <Route path="/business-wallet" element={<BusinessWallet />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/beneficiary-detail/:id"
            element={<BeneficiaryDetail />}
          />
          <Route
            path="/business-wallet/:pid"
            element={<BusinessWalletDetails />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default DvaultRoutes;
