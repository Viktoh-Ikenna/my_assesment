import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useMarkerStyles = makeStyles((theme: Theme) => ({
     root: {
          border: "1px solid #6cb945",
          borderBottomColor: "transparent",
          borderRadius: 20,
          cursor: "pointer",
     },
     pointer: {
          display: "flex",
          flexDirection: "column",
     },
}));
