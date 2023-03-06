import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useSearchInputStyles = makeStyles((theme: Theme) => ({
     root: {
          position: "absolute",
          zIndex: 100,
          backgroundColor: "#fff",
          padding: theme.spacing(1.5, 2),
          borderRadius: theme.spacing(2),
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: theme.spacing(1),
          margin: theme.spacing(4),
          width: "40%",
          boxShadow: "1px 2px 4px 1px #cfd4d8",

          [theme.breakpoints.down("sm")]: {
               width: "100%",
               padding: theme.spacing(1),
          },
     },

     input: {
          backgroundColor: "#fff",
          fontSize: 30,
          fontweight: 400,
          color: "#819496",
          height: 30,
          background: "none",
          border: "none",
          outline: "none",
          "&::placeholder": {
               fontSize: 30,
               fontweight: 400,
               color: "#819496",
          },
          [theme.breakpoints.down("sm")]: {
               fontSize: 16,
          },
     },
     optionsContainer: {
          width: "calc(100% - 20px)",
          padding: theme.spacing(1),
          position: "absolute",
          top: "110%",
          marginLeft: theme.spacing(-2),
          backgroundColor: "#fff",
          maxHeight: 500,
          overflowY: "scroll",
     },
     option: {
          // width: "100%",
          transition: "ease-in-out .1s",
          padding: theme.spacing(1.5, 1),
          display: "flex",
          gap: 4,
          flexDirection: "column",
          color: "#819496",
          cursor: "pointer",

          "& > .title": {
               fontWeight: 600,
               fontSize: 20,
          },

          "& >p": {
               margin: 0,
               padding: 0,
               fontSize: 12,
          },

          "&:hover": {
               backgroundColor: "#ebebeb",
          },
     },
     notFound: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(2),
     },
}));
