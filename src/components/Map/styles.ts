import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useMapStyles = makeStyles((theme: Theme) => ({
     root: {
          height: "calc(100vh - 64px)",
          borderRadius: 20,
          [theme.breakpoints.down("sm")]: {
               height: "100%",
          },
     },
     modalTitle: {
          margin: 0,
          padding: 0,
          color: "#202124",
          marginTop: theme.spacing(1),
     },
     modalHeaderContainer: {
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
     },
     modalTemperature: {
          fontSize: 60,
          fontWeight: 700,
          marginTop: theme.spacing(3),
     },
     iconContainer: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: 18,
          fontWeight: 500,
          color: "#808487",
     },
}));
