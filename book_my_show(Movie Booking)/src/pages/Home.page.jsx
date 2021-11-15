import React,{useState,useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousel.Component";
import PosterSlider from "../components/posterSlider/posterSlider.Component";
import axios from "axios";

function HomePage() {

    const [RecomendedMovies,setRecomendedMovies] = useState([]);
    const [premierMovies,setpremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(()=>{
         const getPopularMovies = async ()=>{
             const getMovies = await axios.get('/movie/popular');
             setRecomendedMovies(getMovies.data.results);
             console.log(getMovies.data.results)
         }

         getPopularMovies();
    },[]);

    useEffect(()=>{
       const getprimerMovies = async ()=>{
           const getTOPMovies = await axios.get('/movie/top_rated');
            setpremierMovies(getTOPMovies.data.results);
       }
       getprimerMovies();
    },[])

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };

        requestUpcomingMovies();
    }, []);


    

    return (
        <>

            <HeroCarousal />
            <div className="container mx-auto px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>

                <EntertainmentCardSlider />
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider 
                title="Recomended Movies"
                subtitle="List of recomemnded Movies"
                RecomendedMovies={RecomendedMovies}
                isDark={false}
                />
            </div>

          <div className="bg-premier-800  py-12">
              <div className="container mx-auto px-4 flex flex-col gap-3">
                  <div className="hidden md:flex">
                      <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                       alt="Rupay" 
                       className="w-full h-full"/>
                  </div>
                  <PosterSlider 
                title="Premiers"
                subtitle="Brand new release every friday"
                RecomendedMovies={premierMovies}
                isDark={true}
                />
              </div>
          </div>

          <div className="container mx-auto px-4 my-8">
                <PosterSlider 
                title="Online Streaming Events"
                subtitle=""
                RecomendedMovies={onlineStreamEvents}
                isDark={false}
                />
            </div>
        </>
    );

}
export default HomePage;