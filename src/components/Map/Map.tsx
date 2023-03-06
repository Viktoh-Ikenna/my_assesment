import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import { useMapStyles } from "./styles";
import locations from "../../locations.json";
import { usePointsMap } from "./components/hooks";
import { useAppContext } from "../../pages/provider";
import { useGetWaetherByLngLat } from "../../pages/hooks/hooks";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";

mapboxgl.accessToken =
     process.env.REACT_APP_MAPBOX_KEY ??
     "pk.eyJ1IjoidmlrdG9oIiwiYSI6ImNrcmpyamM1ZjA1ZG8ydnBjbWRpOWtjN2kifQ.auBvgsbud2l08nrj8lXZfg";

const boxStyle = {
     position: "absolute" as "absolute",
     top: "30%",
     left: "47%",
     transform: "translate(-50%, -50%)",
     width: 400,
     bgcolor: "background.paper",
     boxShadow: 24,
     p: 2,
};
export const Map = () => {
     const classes = useMapStyles();
     const mapContainer = useRef<HTMLDivElement>(null);
     const pointsMap = usePointsMap();
     const { mapFeature, setMapFeature, zoom, setZoom, map } = useAppContext();
     const fatchWeather = useGetWaetherByLngLat();
     const [open, setOpen] = useState(false);
     const [weatherData, setWeatherData] = useState<any | null>(null);

     useEffect(() => {
          if (map.current) return; // initialize map only once
          map.current = new mapboxgl.Map({
               container: mapContainer.current as HTMLElement,
               style: "mapbox://styles/mapbox/streets-v12",
               center: [mapFeature.geometry.coordinates[0], mapFeature.geometry.coordinates[1]],
               zoom: zoom,
          });

          locations.features.forEach((feature) => {
               pointsMap(map, feature, markerClicked);
          });
          map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
     }, []);

     useEffect(() => {
          if (!map.current) return;
          map.current.on("move", () => {
               setMapFeature((mapFeature) => {
                    return {
                         ...mapFeature,
                         geometry: {
                              ...mapFeature.geometry,
                              coordinates: [
                                   map.current.getCenter().lng.toFixed(4),
                                   map.current.getCenter().lat.toFixed(4),
                              ],
                         },
                    };
               });

               setZoom(map.current.getZoom().toFixed(2));
          });
     }, [map.current]);

     const markerClicked = (title: string, coordinates: number[], setLoading: any) => {
          fatchWeather(coordinates[0], coordinates[1], (response) => {
               if (response) {
                    updateWeatherData(response);
               }

               setTimeout(() => {
                    setLoading(false);
               }, 300);
          });
     };

     const updateWeatherData = (response: any) => {
          setWeatherData(response);
          setTimeout(() => {
               setOpen(true);
          }, 300);
     };

     const handleClose = () => {
          setOpen(false);
     };

     return (
          <div>
               <Modal open={open} onClose={handleClose}>
                    <Box sx={boxStyle}>
                         <div className={classes.modalHeaderContainer}>
                              <div>
                                   <h1 className={classes.modalTitle}>
                                        {_.capitalize(weatherData?.name ?? "")}
                                   </h1>
                                   <div className={classes.modalTemperature}>
                                        {(weatherData?.main?.temp - 273.15).toFixed(2) ?? 0}°C
                                   </div>
                                   <div>
                                        min -{" "}
                                        {(weatherData?.main?.temp_min - 273.15).toFixed(2) ?? 0}°C
                                        {"   "}
                                        max -{" "}
                                        {(weatherData?.main?.temp_max - 273.15).toFixed(2) ?? 0}°C
                                   </div>
                              </div>
                              <span className={classes.iconContainer}>
                                   {/* {icon("")} */}
                                   <img
                                        src={`http://openweathermap.org/img/w/${weatherData?.weather?.[0]?.icon}.png`}
                                        alt=""
                                        width={150}
                                        height={150}
                                   />
                                   {weatherData?.weather?.[0]?.main}
                              </span>
                         </div>
                    </Box>
               </Modal>
               <div ref={mapContainer} className={classes.root} />
          </div>
     );
};
