// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Popover,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogContent,
  DialogTitle,
  Avatar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import logoutLogo from "../assets/images/logout.svg";
import appraisal from "../assets/images/appraisal-history.svg";
import appraisalActive from "../assets/images/appraisal-history-active.svg";
import dashboardLogo from "../assets/images/dashboard.svg";
import dashboardLogoActive from "../assets/images/dashboard-active.svg";
import { deepOrange } from "@mui/material/colors";

interface SharedLayoutProps {
  [value: string]: any;
}
function SharedLayout(props: SharedLayoutProps) {
  const theme = useTheme();
  const location = useLocation();
  //   const dispatch = useDispatch();
  const { id } = useParams();

  //   const [dvaultUser] = useState(JSON.parse(localStorage.getItem("dvaultUser")));
  const [anchorEl, setAnchorEl] = useState(null);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [openResetForm, setOpenResetForm] = React.useState(true);

  const handleResetFormOpen = () => {
    setOpenResetForm(true);
  };

  // const handleResetFormClose = () => {
  //   setOpenResetForm(false);
  // };

  //   const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));

  //   useEffect(() => {
  //     if (dvaultUser) {
  //       setTimeout(() => {
  //         setEmail(dvaultUser.email);
  //         setFullName(`${dvaultUser.firstName} ${dvaultUser.lastName}`);
  //       }, [750]);
  //     }
  //   }, [dvaultUser]);

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPop = open ? "simple-popover" : undefined;

  return (
    <>
      {/* {matches && (
        <h3 style={{ textAlign: "center" }}>
          content only available on Desktop mode
        </h3>
      )} */}
      <Grid
        container
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
          //   background: "theme.palette.primary.main",
        }}
      >
        <Grid
          item
          xs={2.5}
          sx={{
            height: "100vh",
            position: "sticky",
            top: 0,
            background: "#059e8f",
          }}
        >
          <Box sx={{ px: 2 }}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                // component="img"
                // alt="Dvault"
                // src={dukkkalogo1}
                sx={{
                  width: "180px",
                  margin: "1.5rem 0 0 0",
                  //   border: "2px solid red",
                  fontSize: "1.5rem",
                  color: "#fff",
                  fontWeight: "600",
                  flexBasis: "10%",
                }}
              >
                Tribe Check
              </Box>

              <Box sx={{ margin: { md: "5rem 0 20rem 0" } }}>
                <NavLink
                  to="/"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Grid
                    container
                    alignItems={"center"}
                    sx={{
                      // background:
                      //   location.pathname === "/" ||
                      //   location.pathname === `/balance-details/${id}`
                      //     ? `${theme.palette.common.linkRedBg}`
                      //     : "none",
                      //   my: 2,
                      //   marginTop: "60px",
                      //   background: "theme.palette.primary.main",
                      //   padding: "10px",
                      //   paddingLeft: "10px",
                      borderRadius: "10px",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <Grid
                      item
                      //   xs={3}
                    >
                      <Box
                        component={"img"}
                        src={
                          location.pathname !== "/"
                            ? dashboardLogo
                            : dashboardLogoActive //   ||
                          //   location.pathname === `/balance-details/${id}`
                        }
                        sx={{ marginRight: "0.5rem" }}
                      />
                    </Grid>
                    <Grid
                      item
                      //   xs={9}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "24px",
                          fontWeight: 600,
                          color: location.pathname !== "/" ? `#CFB99F` : "#fff",
                        }}
                      >
                        Dashboard
                      </Typography>
                    </Grid>
                  </Grid>
                </NavLink>

                <NavLink
                  to="/appraisal"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Grid
                    container
                    alignItems={"center"}
                    sx={{
                      // my: 2,
                      // padding: "10px",
                      // paddingLeft: "10px",
                      borderRadius: "10px",
                      // background:
                      //   location.pathname === "/beneficiaries"
                      //     ? `${theme.palette.common.linkRedBg}`
                      //     : "none",
                    }}
                  >
                    <Grid
                      item
                      //   xs={3}
                    >
                      <Box
                        component={"img"}
                        src={
                          location.pathname !== "/appraisal"
                            ? appraisal
                            : appraisalActive
                        }
                        sx={{ marginRight: "0.5rem" }}
                      />
                    </Grid>
                    <Grid
                      item
                      //   xs={9}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          color:
                            location.pathname !== "/appraisal"
                              ? `#CFB99F`
                              : "#fff",
                          //   color: "#CFB99F",
                          //   marginTop: "1rem",
                        }}
                      >
                        Appraisal history
                      </Typography>
                    </Grid>
                  </Grid>
                </NavLink>
              </Box>

              <Box sx={{}}>
                <Box
                  sx={{
                    borderBottom: "1px solid #fff",
                    paddingBottom: "1rem",
                    margin: "0 0 2rem 0",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Avatar
                      sx={{
                        bgcolor: "#CFB99F",
                        fontSize: "1rem",
                        width: "30px",
                        height: "30px",
                        marginRight: "0.4rem",
                      }}
                    >
                      MJ
                    </Avatar>
                    <Box>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: "600",
                        }}
                      >
                        Mary Jane
                      </Typography>
                      <Typography
                        sx={{
                          color: "#edf5f4",
                          fontWeight: "200",
                          fontSize: "0.8rem",
                        }}
                      >
                        Sales analyst
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex" }}>
                  <Box
                    component={"img"}
                    src={logoutLogo}
                    sx={{ marginRight: "0.4rem" }}
                  />
                  <Typography sx={{ color: "#fff", fontWeight: "600" }}>
                    Logout
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={9.5}
          sx={{
            background: "#fff",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              px: 6,
              py: 1,
              //   background: "#FFFFFF",
            }}
          >
            <Typography
              component={"span"}
              sx={{
                fontSize: "2.1rem",
                fontWeight: 500,
              }}
            >
              {location.pathname === `/business-wallet/${id}` ? (
                <>
                  {/* <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: `${theme.palette.common.lightBlue}`,
                    }}
                  >
                    Dashboard {">"}
                  </Link> */}
                  Dashboard
                </>
              ) : location.pathname === "/business-wallet" ? (
                "Business Wallet"
              ) : location.pathname === "/beneficiaries" ? (
                "Beneficiaries"
              ) : (
                "Dashboard"
              )}
            </Typography>
            {/* <AccountCircleOutlinedIcon
              sx={{
                fontSize: "2.5rem",
              }}
              onClick={handleClick}
            /> */}
            <Popover
              id={idPop}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  "&.MuiPaper-root": {
                    width: "250px",
                    p: 2,
                  },
                }}
              >
                <Stack>
                  <Box>
                    {/* <AccountCircleOutlinedIcon
                      sx={{
                        fontSize: "2.5rem",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    /> */}
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        fontWeight: "700",
                        fontSize: "1.3rem",
                        my: 2,
                      }}
                    >
                      {fullName}
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "500",
                        my: 1,
                      }}
                    >
                      {email}
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "500",
                        my: 1,
                        // color: `${theme.palette.common.flagIcon}`,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                      //   onClick={() => dispatch(logoutUser())}
                    >
                      Sign out
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Popover>
          </Stack>
          {/* <Box
            sx={{
              px: 6,
            }}
          > */}
          {/* {!dvaultUser?.lastLogin ? (
              <Box>
                <Dialog
                  open={openResetForm}
                  // onClose={handleResetFormClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <Alert severity="warning">
                    Welcome! For security reasons, please reset your password to
                    continue.
                  </Alert>
                  <DialogTitle
                    id="alert-dialog-title"
                    sx={{ textAlign: "center" }}
                  >
                    Reset Your Password
                  </DialogTitle>
                  <DialogContent>
                    <ResetPasswordForm />
                  </DialogContent>
                </Dialog>
              </Box>
            ) : (
              <Outlet />
            )} */}
          {/* </Box> */}
        </Grid>
      </Grid>
    </>
  );
}

export default SharedLayout;
