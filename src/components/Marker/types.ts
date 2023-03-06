import { ReactNode } from "react";

export interface MarkerProps {
     onClick: (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
     children?: ReactNode;
}
