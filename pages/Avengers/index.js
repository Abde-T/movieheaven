import tmdb from "@/api/tmdb";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProgressCircle from "@/ui/ProgressCirlce";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  return (
    <>
    <div className="py-10">
      <Nav />

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
            {movies.slice(0,12).map((movie) => (
              <div className=" md:w-3/6 xl:w-1/4 p-6 w-1/2 flex items-centerk">
                <div className="min-w-[150px] w-[300px] h-[500px]  rounded-t rounded-b-none ">
                <Link
                    href={`/movie/${movie.id}`}
                    className="flex justify-center flex-wrap no-underline hover:no-underline"
                  >
                   <div className="relative ">
                      <img
                        className=" rounded-[20px]"
                        width={300}
                        src={getPoster(movie.backdrop_path)}
                      />
                      <div className="absolute bottom-[-40px] translate-y-[-50%] translate-x-[-50%] right-[-40px]">
                        <ProgressCircle
                          percent={Math.floor(movie.vote_average * 10)}
                        />
                      </div>
                    </div>
                    <div className="w-full font-bold text-xl mt-5 text-[#f0dcae] px-6">
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
