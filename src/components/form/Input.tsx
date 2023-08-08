import React from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import { TextError } from "./TextError";
interface InputProp {
  [key: string]: any;
}
function Input(props: InputProp) {
  const { label, name, helperText, required, maxLength, color,onChange, sx, ...rest } =
    props;
  return (
    <Box sx={{ marginBottom: "2rem", fontFamily: "Poppins" }}>
      <Typography
        // variant="label"
        component="label"
        htmlFor={name}
        sx={sx ? sx : { fontWeight: 500, color: color ? color : "#454E68" }}
      >
        {required}
        {label}
      </Typography>
      <br />
      {/* <Field
        id={name}
        name={name}
        maxLength={maxLength}
        {...rest}
        as={TextField}
        onChange={}
        sx={{
          width: "100%",
          margin: "0.5rem 0 0 0",
          "& .MuiInputBase-input": {
            padding: "9px 13px",
            border: "1px solid #E1E3E7",
          },
          "& .-MuiOutlinedInput": {
            borderRadius: "6px",
          },
          "& .-MuiOutlinedInput:focus": {
            outline: 0,
          },
        }}
      /> */}
      <Field>
        {({ field, form }: FieldProps) => {
          return (
            <FormControl fullWidth sx={{ marginTop: "0.7rem" }}>
              <TextField
                id={name}
                //{...props}
                {...field}
                error={!!(form.errors[name] && form.touched[name])}
                //   maxLength={maxLength}
                {...rest}
                onChange={onChange ?? form.handleChange}
                sx={{ backgroundColor: "white", borderRadius: "7px" }}
              />
              <ErrorMessage
                name={name}
                children={(error:any) => (
                  <TextError color="#fff">{error}</TextError>
                )}
              />
            </FormControl>
          );
        }}
      </Field>
    </Box>
  );
}
export default Input;