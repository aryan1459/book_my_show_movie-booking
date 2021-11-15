import React, { useState,useEffect } from "react";
import HeroSlider from "react-slick";
import { NextArrow,PrevArrow } from "./Arrows.Component";
import axois from "axios";



const HeroCarousal=()=>{
    const [images, setImages]=useState([]);

useEffect(()=>{
    const requestNowPlayingMovies= async()=>{
        const getImages = await axois.get("/movie/now_playing");
        setImages(getImages.data.results);
    }
    requestNowPlayingMovies();
},[])
  //react is bascically sequence based format we want our "useEfect" to run in our seqential format
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "200px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
return(<>
   <div className="lg:hidden">
       <HeroSlider {...settings}>
       {images.map((image)=>(
    <div className="w-full h-56 md:h-80 py-3">
        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Banner" className="w-full h-full object-center"/>
    </div>
       ))}
       </HeroSlider>
   </div>
   <div className="hidden lg:block">
       <HeroSlider {...settingsLG}>
       {images.map((image)=>(
           <div className="w-full h-96 px-2 py-3">
               <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Banner" className="w-full h-full rounded-md object-center"/>
           </div>

       ))}
       </HeroSlider>
   </div>
</>)
}

export default HeroCarousal;






// <div className="hidden lg:block">
// <HeroSlider {...settingsLG}>
// {images.map((image)=>{
// return(
//     <div className="w-full h-96 px-2 py-3">
//         <img src={image} alt="Banner" className="w-full h-full rounded-md object-center"/>
//     </div>
// )
// })}
// </HeroSlider>
// </div>