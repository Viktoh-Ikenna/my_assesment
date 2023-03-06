import axios from "axios";

const WeatherApiKey = process.env.REACT_APP_WEATHER ?? "101f90748b3c06fffe26f5a13863982f";

export const useGetWaetherByLngLat = () => {
     return async (lng: number, lat: number, cb?: (arg?: any) => void) => {
          try {
               const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WeatherApiKey}`,
               );
               cb?.(response.data);
          } catch (err) {
               console.log(err);
               cb?.();
          }
     };
};
