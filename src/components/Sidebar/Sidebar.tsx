import { useSidebarStyles } from "./styles";
import { MdKeyboardBackspace } from "react-icons/md";
import React, { useState } from "react";
import locations from "../../locations.json";
import { useAppContext } from "../../pages/provider";

export const Sidebar = () => {
     const [isOpen, setOpen] = useState(false);
     const { setMapFeature, setZoom, map } = useAppContext();
     const classes = useSidebarStyles();

     const handleSelect = (feature: any) => {
          setMapFeature(feature);
          setOpen(false);
          setZoom(16);

          if (!map.current) return;
          map.current.jumpTo({
               center: [feature.geometry.coordinates[0], feature.geometry.coordinates[1]],
               zoom: 12,
          });
     };

     return (
          <div className={classes.root} style={!isOpen ? { marginRight: -310 } : {}}>
               <div className={classes.iconContainer} onClick={() => setOpen((open) => !open)}>
                    <MdKeyboardBackspace color="#819496" size={35} />
               </div>

               <div
                    className={classes.optionsContainer}
                    style={!isOpen ? { opacity: 0 } : { opacity: 1 }}
               >
                    {locations.features?.map((feature, idx) => (
                         <div
                              className={classes.option}
                              onClick={() => handleSelect(feature)}
                              key={idx}
                         >
                              <p className="title">{feature.properties.title}</p>
                              <p>{feature.properties.description}</p>
                         </div>
                    ))}
               </div>
          </div>
     );
};
