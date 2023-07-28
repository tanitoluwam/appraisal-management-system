import {
  Box,
  Container,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LoginPhoto from '../assets/loginPhoto.svg';
import React from 'react';

function Login() {
  const theme = useTheme();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  return (
    <Box>
      {/* <Container
        sx={{
          border: '2px solid red',
        }}
      > */}
      <Grid
        container
        alignItems={'center'}
        columnSpacing={3}
        sx={{
          border: '2px solid green',
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            border: '2px solid purple',
          }}
        >
          {matches && (
            <Box
              //   component={'div'}
              sx={{
                // border: '2px solid yellow',
                // width: '50',
                width: '100%',
                margin: '20px auto',
              }}
            >
              <Box
                component={'img'}
                src={LoginPhoto}
                alt='mailList'
                sx={{
                  width: '100%',
                  maxHeight: '600px',
                  minHeight: '400px',
                  display: 'block',
                  objectFit: 'cover',
                  borderRadius: '30px',
                  //   display: 'block',
                  // border: '2px solid orange',
                }}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              px: 3,
            }}
          >
            <Typography
              component={'h3'}
              color={'initial'}
              sx={{
                fontSize: '57px',
                fontWeight: '500',
              }}
            >
              Login
            </Typography>
            <Typography
              variant='h6'
              sx={{
                fontSize: '20px',
              }}
            >
              Access your Dashboard and Tools
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* </Container> */}
    </Box>
  );
}

export default Login;
