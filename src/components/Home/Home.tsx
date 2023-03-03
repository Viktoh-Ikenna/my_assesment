import React from "react";
import { useHomeStyles } from "./styles";

export const Home = () => {
     const classes = useHomeStyles();

     return <div className={classes.root}>Home</div>;
};
