import { Map } from "../Map/Map";
import { useHomeStyles } from "./styles";

export const Home = () => {
     const classes = useHomeStyles();

     return (
          <div className={classes.root}>
               <Map />
          </div>
     );
};
