import tmdb from "@/api/tmdb";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProgressCircle from "@/ui/ProgressCirlce";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/assets/Popcorn.png";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Slider from "react-slick";

export default function Avengers() {
  const getPoster = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`;
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get("https://api.themoviedb.org/3/search/movie?api_key=5ab490b5f6681ee3678d3ad287d1d366&language=en-US&query=%20Avengers%20marvel&page=1&include_adult=false");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  const [query, setQuery] = useState("");
  function handleClick() {
  }

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: true,
  };


  return (
    <>
    <div className="py-10 relative">
      <Nav />
      <div className="z-40  absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Link href="/">
                <Image
                  className="w-[100px] absolute top-[-35%] left-[-50%] z-40 hover:scale-105 "
                  width={1000}
                  src={logo}
                  alt="Picture"
                />
              </Link>

          <SearchBar
          handleClick={handleClick}
          query={query}
          setQuery={setQuery}
          />
        </div>
    </div>
    <div className="mt-10 relative">
        <Slider {...settings} key={Date.now()}>
          {movies.map((movie) => (
            <section className="mt-8 h-[600px] relative overflow-hidden z-30 bg-black ">
              <img
              alt="Picture"
                src={getPoster(movie.poster_path || movie.backdrop_path)}
                className="w-[100%] h-[700px] absolute object-cover 	opacity-[50%] blur-[15px]"
              />
              <div className="flex flex-wrap justify-around items-center ">

              <div className="relative min-h-[calc(100vh-200px)] flex items-center  ">
              <Link
                    href={`/movie/${movie.id}`}
                    className="flex justify-center flex-wrap no-underline hover:no-underline"
                  >
                <img
                alt="Picture"
                  src={getPoster(movie.backdrop_path)}
                  className="w-[350px] hidden md:block mb-[25%]"
                  />
                  </Link>
              </div>
              <div className=" inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50 ">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                  {movie.title || movie.original_name}
                </h1>
                <div className="flex items-center space-x-3 md:space-x-5">
                  <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                    <img alt="Picture" className="h-6 md:h-8" />
                    <span className="uppercase font-medium tracking-wide">
                      Play
                    </span>
                  </button>

                  <button className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                    <img alt="Picture" className="h-6 md:h-8" />
                    <span className="uppercase font-medium tracking-wide">
                      Trailer
                    </span>
                  </button>
                  <div className="cursor-pointer hover:scale-105">
                    <ProgressCircle
                      percent={Math.floor(movie.vote_average * 10)}
                      />
                  </div>
                </div>

                <p className="text-xs md:text-xl text-white">
                  {movie.release_date || movie.first_air_date} •{" "}
                  {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m •{" "}
                </p>
                <h4 className="text-white text-sm md:text-lg max-w-4xl">
                  {movie.overview}
                </h4>
                      </div>
              </div>
            </section>
          ))}
        </Slider>
      </div>
      <section className="py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#f0dcae]">
             The Avengers
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-[#f0dcae] w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full  md:w-1/3 flex items-center flex-wrap flex-grow flex-shrink">
            {movies.map((movie) => (
              <div className=" md:w-3/6 xl:w-1/4 p-6 w-1/2 flex items-centerk">
                <div className="min-w-[150px] w-[300px] h-[500px]  rounded-t rounded-b-none ">
                <Link
                    href={`/movie/${movie.id}`}
                    className="flex justify-center flex-wrap no-underline hover:no-underline"
                  >
                   <div className="relative ">
                      <img
                         alt="Picture"
                        className=" rounded-[20px]"
                        width={300}
                        src={getPoster(movie.backdrop_path)}
                      />
                      <div className="cursor-pointer hover:scale-105 absolute bottom-[-40px] translate-y-[-50%] translate-x-[-50%] right-[-40px]">
                        <ProgressCircle
                          percent={Math.floor(movie.vote_average * 10)}
                        />
                      </div>
                    </div>
                    <div className="w-full font-bold text-lg mt-5 text-[#f0dcae] px-6">
                      {movie.title}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
