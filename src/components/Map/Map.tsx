import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import { useMapStyles } from "./styles";
import locations from "../../locations.json";
import { usePointsMap } from "./components/hooks";

mapboxgl.accessToken =
     "pk.eyJ1IjoidmlrdG9oIiwiYSI6ImNrcmpyamM1ZjA1ZG8ydnBjbWRpOWtjN2kifQ.auBvgsbud2l08nrj8lXZfg";

export const Map = () => {
     const classes = useMapStyles();
     const mapContainer = useRef<HTMLDivElement>(null);
     const map = useRef<any>(null);
     const [lng, setLng] = useState(-87.65);
     const [lat, setLat] = useState(41.84);
     const [zoom, setZoom] = useState(9);
     const pointsMap = usePointsMap();

     useEffect(() => {
          if (map.current) return; // initialize map only once
          map.current = new mapboxgl.Map({
               container: mapContainer.current as HTMLElement,
               style: "mapbox://styles/mapbox/streets-v12",
               center: [lng, lat],
               zoom: zoom,
          });

          // // Render custom marker components
          locations.features.forEach((feature) => {
               console.log("feature", feature);
               pointsMap(map, feature, markerClicked);
          });

          // // Add navigation control (the +/- zoom buttons)
          map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

          // // Clean up on unmount
          return () => map.current.remove();
     }, [map.current]);

     useEffect(() => {
          if (!map.current) return; // wait for map to initialize
          map.current.on("move", () => {
               setLng(map.current.getCenter().lng.toFixed(4));
               setLat(map.current.getCenter().lat.toFixed(4));
               setZoom(map.current.getZoom().toFixed(2));
          });
     });

     const markerClicked = (title: string) => {
          window.alert(title);
     };

     return (
          <div>
               <div ref={mapContainer} className={classes.root} />
          </div>
     );
};
