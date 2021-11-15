import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { MovieContext } from "../context/Movie.context";
//import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
//import HeroCarousal from "../components/HeroCarousal/HeroCarousel.Component";
import MovieNavbar from "../components/Navbar/MovieNavbar";

const MovieLayout=(props)=>{

    const { id } = useParams();
    const { movie, setMovie } = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        };
        requestMovie();
    }, [id]);
return(
    <div>
        <MovieNavbar/>
        {props.children}                  
        <div>footer</div>
    </div>
);
};
export default MovieLayout;


// we cannot pass props in children as it is inavlid like {props.children {props}}