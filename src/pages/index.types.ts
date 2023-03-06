export interface AppProviderProps {
     mapFeature: {
          type: string;
          properties: {
               title: string;
               description: string;
          };
          geometry: {
               coordinates: number[];
               type: string;
          };
     };
     setMapFeature: React.Dispatch<
          React.SetStateAction<{
               type: string;
               properties: {
                    title: string;
                    description: string;
               };
               geometry: {
                    coordinates: number[];
                    type: string;
               };
          }>
     >;
     zoom: number;
     setZoom: React.Dispatch<React.SetStateAction<number>>;
     map: React.MutableRefObject<any>;
}
