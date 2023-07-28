import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import { TypographyOptions } from "@mui/material/styles/createTypography";

interface CustomPaletteColors {
  nude: string;
  black: string;
  white: string;
}

interface CustomPalette extends PaletteOptions {
  common: CustomPaletteColors;
}

export interface CustomTheme {
  palette: CustomPalette;
  typography: TypographyOptions;
}

// Define color values
const Green = "#1D606E";
const black = "#000000";
const white = "#ffffff";
const lightNude = "#CFB99F";
const darkNude = "#E6CFB5";

// Define your custom theme
export const theme: CustomTheme = {
  palette: {
    common: {
      nude: darkNude,
      black: black,
      white: white,
    },
    primary: {
      main: Green,
    },
    secondary: {
      main: lightNude,
    },

    // Add other properties required by the PaletteOptions interface
    mode: "light",
    contrastThreshold: 3,
    tonalOffset: 0.2,
    // error: { main: "#f44336" }, // If you have the error property, add it here
  },
  typography: {
    fontSize: 14,
    fontFamily: ["Poppins", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
};

export default createTheme(theme);

