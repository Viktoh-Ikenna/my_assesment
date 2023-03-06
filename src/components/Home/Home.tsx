import { Map } from "../Map/Map";
import { SearchInput } from "../SearchInput/SearchInput";
import { Sidebar } from "../Sidebar/Sidebar";
import { useHomeStyles } from "./styles";

export const Home = () => {
     const classes = useHomeStyles();

     return (
          <div className={classes.root}>
               <SearchInput />
               <Map />
               <Sidebar />
          </div>
     );
};
