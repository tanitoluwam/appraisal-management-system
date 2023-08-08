import React from "react";
import Input from "./Input";
interface ControlProp {
  control: string;
  //   [key: string]: any;
  [key: string]: any;
}
const FormControl = ({ control, ...rest }: ControlProp) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    //   break;
      default:
          return null;
  }
};
export default FormControl;