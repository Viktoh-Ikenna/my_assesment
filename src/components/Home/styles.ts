import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useHomeStyles = makeStyles((theme: Theme) => ({
     root: {
          width: "calc(100% - 64px)",
          margin: theme.spacing(4, "auto"),
          position: "relative",
          [theme.breakpoints.down("sm")]: {
               width: "100%",
               margin: 0,
          },
     },
}));
