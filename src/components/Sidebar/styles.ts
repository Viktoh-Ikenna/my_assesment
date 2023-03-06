import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useSidebarStyles = makeStyles((theme: Theme) => ({
     root: {
          position: "absolute",
          zIndex: 10000,
          padding: theme.spacing(1.5, 2),
          borderRadius: theme.spacing(2),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // flexDirection: "column",
          gap: theme.spacing(10),
          margin: theme.spacing(4),
          width: "30%",
          minWidth: 350,
          top: 0,
          right: 0,
          transition: "ease-in-out .1s all",
     },
     optionsContainer: {
          width: "100%",
          padding: theme.spacing(1),
          backgroundColor: "#fff",
          overflowY: "scroll",
          transition: "ease-in-out .1s all",
          maxHeight: "70vh",
     },
     option: {
          // width: "100%",
          transition: "ease-in-out .1s all",
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
     iconContainer: {
          backgroundColor: "#fff",
          borderRadius: "50%",
          padding: theme.spacing(1),
          cursor: "pointer",
     },
}));
