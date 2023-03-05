import { FC } from "react";
import { MarkerProps } from "./types";

export const Marker: FC<MarkerProps> = ({ onClick, children }) => {
     const _onClick = () => {
          onClick();
     };

     return (
          <button onClick={_onClick} className="marker">
               {children}
          </button>
     );
};
