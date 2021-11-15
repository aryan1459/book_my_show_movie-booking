import React from "react";
//import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
//import HeroCarousal from "../components/HeroCarousal/HeroCarousel.Component";
import Navbar from "../components/Navbar.Component";

const DefaultLayout=(props)=>{
return(
    <div>
        <Navbar/>
        {props.children}
        <div>footer</div>
    </div>
);
};
export default DefaultLayout;