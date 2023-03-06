import { useRef } from "react";
import { Marker } from "../../Marker/Marker";
import ReactDOM from "react-dom/client";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export const usePointsMap = () => {
     const ref = useRef<any>();

     return (
          map: any,
          feature: any,
          markerClicked: (title: string, coordinates: number[], setLoading: any) => void,
     ) => {
          ref.current = document.createElement("div");
          // Render a Marker Component on our new DOM node
          const pointerRoot = ReactDOM.createRoot(ref.current);

          pointerRoot.render(
               <Marker
                    onClick={(setLoading) =>
                         markerClicked(
                              feature.properties.description as string,
                              feature.geometry.coordinates,
                              setLoading,
                         )
                    }
               />,
          );

          // Create a Mapbox Marker at our new DOM node
          new mapboxgl.Marker(ref.current)
               .setLngLat(feature.geometry.coordinates)
               .addTo(map.current);
     };
};
