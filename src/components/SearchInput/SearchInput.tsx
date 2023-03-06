import { useSearchInputStyles } from "./styles";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import locations from "../../locations.json";
import { useAppContext } from "../../pages/provider";

export const SearchInput = () => {
     const classes = useSearchInputStyles();
     const [isOpen, setOpen] = useState(false);
     const [searchValue, setSearchValue] = useState("");
     const { setMapFeature, setZoom, map } = useAppContext();
     const [filteredLocations, setFilteredLocations] = useState<typeof locations.features | null>(
          null,
     );

     const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
          const filterLocations = locations.features.filter((feature) => {
               const title = feature.properties.title;
               if (
                    title
                         .split(" ")
                         .some((title) =>
                              title
                                   .toLowerCase()
                                   .startsWith((event.target as any).value?.toLowerCase()),
                         )
               ) {
                    return feature;
               }
          });
          setFilteredLocations(filterLocations);
     };

     const handleSelect = (feature: any) => {
          setMapFeature(feature);
          setOpen(false);
          setZoom(16);
          setSearchValue(feature.properties.title);

          if (!map.current) return;
          map.current.jumpTo({
               center: [feature.geometry.coordinates[0], feature.geometry.coordinates[1]],
               zoom: 12,
          });
     };

     return (
          <div className={classes.root}>
               <FiSearch color="#819496" size={35} />
               <input
                    type="text"
                    className={classes.input}
                    placeholder="search locations"
                    onClick={() => setOpen((open) => !open)}
                    onKeyUp={handleKeyUp}
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
               />
               {isOpen && (
                    <div className={classes.optionsContainer}>
                         {!filteredLocations &&
                              locations.features.map((feature, idx) => (
                                   <div
                                        className={classes.option}
                                        onClick={() => handleSelect(feature)}
                                        key={idx}
                                   >
                                        <p className="title">{feature.properties.title}</p>
                                        <p>{feature.properties.description}</p>
                                   </div>
                              ))}
                         {filteredLocations &&
                              filteredLocations?.map((feature, idx) => (
                                   <div
                                        className={classes.option}
                                        onClick={() => handleSelect(feature)}
                                        key={idx}
                                   >
                                        <p className="title">{feature.properties.title}</p>
                                        <p>{feature.properties.description}</p>
                                   </div>
                              ))}
                         {filteredLocations && filteredLocations.length === 0 && (
                              <div className={classes.notFound}>Not Found</div>
                         )}
                    </div>
               )}
          </div>
     );
};
