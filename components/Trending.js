import tmdb from "../api/tmdb";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProgressCircle from "@/ui/ProgressCirlce";
import Slider from "react-slick";


export default function Trending() {
  const getPoster = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`;
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get("trending/movie/day");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows:false,
    speed: 2000, 
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }

      
    ]
  };

  return (
    <>
      <section className="bg-white border-b py-8" id="Trending">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Today's pick
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full">
          <Slider {...settings} key={Date.now()} className="flex ">
            {movies.map((movie) => (
              <div
              key={movie.id}
              className="flex items-center p-6 justify-center "
              >
                <div className="relative rounded-t rounded-b-none flex flex-col justify-center items-center">
                  <Link
                    href={`/movie/${movie.id}`}
                    className="flex items-center flex-col"
                    >
                    <div className="relative ">
                      <img
                        className=" rounded-[20px] w-[300px]"
                       
                        src={getPoster(movie.backdrop_path)}
                        />
                      <div className="absolute bottom-[-40px] translate-y-[-50%] translate-x-[-50%] right-[-40px]">
                        <ProgressCircle
                          percent={Math.floor(movie.vote_average * 10)}
                          />
                      </div>
                    </div>
                      <div className="w-full font-bold text-xl mt-5 text-gray-800 px-6">
                        {movie.title}
                      </div>
                  </Link>
                </div>
              </div>
            ))}

            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
