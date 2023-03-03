import React, { ReactNode, useContext, useState } from "react";
import { AppProviderProps } from "./index.types";

const AppStateContext = React.createContext<any>(null);
export const useAppContext = () => useContext<AppProviderProps>(AppStateContext);

export const AppProvider = ({ children }: { children: ReactNode }) => {
     const [state, setState] = useState();

     return <AppStateContext.Provider value={{ state }}>{children}</AppStateContext.Provider>;
};
