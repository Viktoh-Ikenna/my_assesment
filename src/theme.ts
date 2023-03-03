import { createTheme, adaptV4Theme, Theme as MuiTheme } from "@mui/material/styles";

type ExtendedThemeOptions = {
     include: { [key: string]: any };
     design: {
          font: { [key: string]: any };
          colors: { [key: string]: string };
     };
};

declare module "@mui/material/styles/createTheme" {
     // eslint-disable-next-line @typescript-eslint/no-empty-interface
     interface Theme extends ExtendedThemeOptions {}

     // allow configuration using `createMuiTheme`
     // eslint-disable-next-line @typescript-eslint/no-empty-interface
     interface DeprecatedThemeOptions extends ExtendedThemeOptions {}
}

export const baseColors = {
     dangerColor: "#FF0000",
     successColor: "#0A7227",
     greyColor: "#808080",
     whiteColor: "#FFFFFF",
};

export type BaseTheme = MuiTheme & ExtendedThemeOptions;

export const theme: any = {
     breakpoints: {
          values: {
               xs: 0,
               sm: 600,
               md: 960,
               lg: 1280,
               xl: 1920,
          },
     },
     typography: {
          fontFamily: ["Open Sans, sans-serif"].join(","),
          fontWeightMedium: 600,
          fontWeightRegular: 400,
          fontWeightLight: 300,
          fontWeightBold: 700,
          fontWeightExtraBold: 800,
          fontSize: 12,
          h2: {
               fontWeight: 500,
          },
          h5: {
               fontSize: "1.4rem",
          },
     },
     design: {
          font: {
               brandon: (weight: 400) => ({
                    "font-family": '"open-sans", sans-serif',
                    "font-weight": weight,
               }),
               title: '"auto-pro-new", sans-serif',
               regular: '"Nunito", sans-serif',
          },
          colors: {
               primary100: "#0A7227",
               primary200: "#23803D",
               primary300: "#3B8E52",
               primary400: "#6CAA7D",
               primary500: "#9DC7A9",
               primary600: "#CEE3D4",
               primary700: "#E7F1E9",
               secondary100: "#F4CDB4",
               info100: "#2F80ED",
               success100: "#0BCE5A",
               warning100: "#E2B93B",
               warning200: "#FBF6E7",
               error100: "#F34141",
               black: "#000000",
               black200: "#010E05",
               white: "#FFFFFF",
               grey100: "#343E37",
               grey200: "#4D5650",
               grey300: "#999F9B",
               grey400: "#CCCFCD",
               grey500: "#E6E7E6",
               grey600: "#FBFBFB",
               grey900: "#E8E8E8",
               black300: "rgba(0, 0, 0, 0.5)",
               black400: "rgba(0,0,0,0.06)",
               white200: "rgba(255, 255, 255, 0.3)",
          },
     },
     overrides: {
          MuiTypography: {
               h1: {
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: "43.65px",
               },
               h2: {
                    fontSize: 40,
                    lineHeight: "46.96px",
               },
               h3: {
                    fontSize: 32,
                    lineHeight: "37.57px",
               },
               h4: {
                    fontSize: 24,
                    lineHeight: "28.18px",
                    fontWeight: 700,
               },
          },
          MuiSelect: {
               select: {
                    "&:focus": {
                         backgroundColor: "#ffffff",
                    },
               },
          },
          MuiTableCell: {
               root: {
                    padding: "0 16px",
               },
               head: {
                    padding: "8px 16px",
               },
          },
          MuiChip: {
               root: {
                    width: "auto",
               },
          },
          MuiOutlinedInput: {
               root: {
                    minHeight: 40,
                    position: "relative",
                    "& $notchedOutline": {
                         borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
                         borderColor: "#4A90E2",
                         // Reset on touch devices, it doesn't add specificity
                         "@media (hover: none)": {
                              borderColor: "rgba(0, 0, 0, 0.23)",
                         },
                    },
                    "&$focused $notchedOutline": {
                         borderColor: "rgba(255, 0, 0, 0.2)",
                         boxSizing: "border-box",
                         boxShadow: "0px 0px 8px rgba(255, 0, 0, 0.2)",
                    },
               },
               input: {
                    padding: "8px 12px",
                    minHeight: 40,
                    fontSize: ".9rem",
                    lineHeight: "13pt",
                    boxSizing: "border-box",
               },
               notchedOutline: {
                    borderWidth: 0.3,
                    borderStyle: "solid",
                    borderColor: "#ADADAD",
                    transition: "border-color box-shadow .3s",
               },
          },
     },
};

export default createTheme(adaptV4Theme(theme));
