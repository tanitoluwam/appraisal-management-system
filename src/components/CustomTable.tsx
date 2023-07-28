import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SelectorIcon from "assets/images/selector-icon.svg";
import { Box, Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(5, 158, 143,0.2)",
    color: "#059e8f",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  SelectorIcon: string,
  DATE: string,
  SCORE: number,
  STATUS: string,
  protein: string
) {
  return { SelectorIcon, DATE, SCORE, STATUS, protein };
}

const rows = [
  createData("KPI 1", "12th june 2023", 6.0, "Completed", "View appraisal"),
  createData("KPI 1", "13th june 2023", 9.0, "Completed", "View appraisal"),
  createData("KPI 1", "14th june 2023", 16.0, "Failed", "View appraisal"),
  createData("KPI 1", "25th june 2023", 3.7, "Completed", "View appraisal"),
  createData("KPI 1", "23th june 2023", 16.0, "Completed", "View appraisal"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Box
                component="img"
                src={SelectorIcon}
                sx={{ color: "#059e8f" }}
              />
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: "600" }}>
              DATE
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: "600" }}>
              SCORE
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: "600" }}>
              STATUS
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: "600" }}
            ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.SelectorIcon}>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{ color: "#059e8f", fontWeight: "500" }}
              >
                {row.SelectorIcon}
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ color: "#64748B" }}>
                {row.DATE}
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ color: "#64748B" }}>
                {row.SCORE}
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                <Typography
                  sx={{
                    backgroundColor:
                      row.STATUS === "Completed"
                        ? "rgba(110, 208, 151, 0.44)"
                        : "rgba(235, 33, 33,0.44)",
                    color:
                      row.STATUS === "Completed"
                        ? "rgba(110, 208, 151, 1)"
                        : "rgba(235, 33, 33,0.44)",
                    display: "inline",
                    // width: "100px",
                    fontSize: "0.7rem",
                    padding: "0.5rem",
                    borderRadius: "25px",
                    fontWeight: "600",
                  }}
                >
                  {row.STATUS}
                </Typography>{" "}
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ color: "#64748B" }}>
                <Typography
                  sx={{
                    backgroundColor: "rgba(207, 185, 159)",
                    color: "#fff",
                    fontSize: "0.7rem",
                    padding: "0.5rem",
                    borderRadius: "25px",
                    fontWeight: "600",
                    display: "inline",
                  }}
                >
                  {row.protein}
                </Typography>{" "}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
