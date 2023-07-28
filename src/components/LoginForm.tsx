import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Formik, Form, FormikHelpers } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import FormControl from './form/FormControl';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { loginUser, restoreRegisteredUser } from '../features/trdUserSlice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface LoginFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  // const dispatch = useDispatch();
  // const { trdUser } = useSelector((store: any) => store.trdUser); // Replace 'any' with the actual type of the store
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    // console.log(trdUser);
    // if (trdUser) {
    //   setTimeout(() => {
    //     console.log('Navigated');
    //     return navigate('/');
    //   }, 1000);
    // }
    // dispatch(restoreRegisteredUser());
    return;
  }, [
    // trdUser,
    navigate,
    // dispatch
  ]);

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^([a-zA-Z]{0,}\.?[a-zA-Z]{1,})@(dukka.com|dipfellows.org)$/,
        'Email should be a valid Dukka email Address'
      )
      .required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    console.log(values);
    const { email, password } = values;
    // dispatch(loginUser({ email, password }));
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const { dirty, isValid, isSubmitting } = formik;
        console.log(formik);
        return (
          <Form>
            <Box>
              <FormControl
                control='input'
                label='Email'
                name='email'
                type='email'
                value={formik.values.email}
              />
              <FormControl
                control={'input'}
                label='Password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box py={2}>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  disabled={!dirty || !isValid || isSubmitting}
                  value={formik.values.password}
                  sx={{
                    '&.MuiButton-root': {
                      color: 'white',
                      py: 1.5,
                      paddingLeft: '50px',
                      paddingRight: '50px',
                      marginTop: '10px',
                      fontSize: '17px',
                    },
                  }}
                >
                  {isSubmitting ? (
                    <CircularProgress size={35} color='secondary' />
                  ) : (
                    'Login'
                  )}
                </Button>
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
