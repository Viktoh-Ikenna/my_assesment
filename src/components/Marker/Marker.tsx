import { FC, useState } from "react";
import { useMarkerStyles } from "./styles";
import { MarkerProps } from "./types";
import { TiWeatherCloudy } from "react-icons/ti";
import { GrLocationPin } from "react-icons/gr";
import { CircularProgress } from "@mui/material";

export const Marker: FC<MarkerProps> = ({ onClick, children }) => {
     const classes = useMarkerStyles();
     const [loading, setLoading] = useState(false);

     const _onClick = () => {
          setLoading(true);
          onClick(setLoading);
     };

     return (
          <div onClick={_onClick} className={classes.root}>
               {!loading && (
                    <div className={classes.pointer}>
                         <TiWeatherCloudy size={35} color="#17719e" />
                         <GrLocationPin size={35} color="#34ec42" />
                    </div>
               )}
               {loading && <CircularProgress />}
               {children}
          </div>
     );
};
