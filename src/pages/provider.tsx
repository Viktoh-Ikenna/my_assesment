import React, { ReactNode, useContext, useRef, useState } from "react";
import { AppProviderProps } from "./index.types";

const AppStateContext = React.createContext<any>(null);
export const useAppContext = () => useContext<AppProviderProps>(AppStateContext);

export const AppProvider = ({ children }: { children: ReactNode }) => {
     const [mapFeature, setMapFeature] = useState({
          type: "Feature",
          properties: {
               title: "Grant Start",
               description:
                    "A downtown park that is the site of many of Chicago's favorite festivals and events",
          },
          geometry: {
               coordinates: [-87.619185, 41.876367],
               type: "Point",
          },
     });
     const [zoom, setZoom] = useState(12);
     const map = useRef<any>(null);

     return (
          <AppStateContext.Provider value={{ mapFeature, setMapFeature, zoom, setZoom, map }}>
               {children}
          </AppStateContext.Provider>
     );
};
