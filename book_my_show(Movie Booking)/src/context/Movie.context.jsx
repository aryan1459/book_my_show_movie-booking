import React, { useState } from "react";

export const MovieContext = React.createContext(); // we bacically use react context when we have small amount of data
// for lager data we should use redux

const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState({
        id: 0,
        original_title: "",
        overview: "",
        backdrop_path: "",
        poster_path: "",
    });

    return (
        <MovieContext.Provider value={{ movie, setMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;