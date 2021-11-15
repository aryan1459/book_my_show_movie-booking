import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.components";

const PosterSlider=(props)=>{


    const settings = {
        infinite: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                },
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const {RecomendedMovies,title,subtitle,isDark,config} = props;

    const currentSettings  = config ? config: settings;

return(
    <>
    <div className="flex flex-col items-start my-2">
    <h3 className={`text-2xl font-bold ${isDark ?"text-white":"text-black"}`}>{title}</h3>
    <p className={`text-sm text-bold text-gray-800 ${isDark ? "text-white":"text-black"}`}>{subtitle}</p>
    </div>
    <Slider {...currentSettings}>
    {RecomendedMovies.map((each)=>(
        <Poster  {...each} isDark={isDark}/>
    ))}
    </Slider>
    </>
)
}

export default PosterSlider;