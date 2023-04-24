import tmdb from "../api/tmdb";
import { useEffect, useState } from "react";

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

  return (
    <>
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Today's pick
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
         <div  className="w-full  md:w-1/3 p-6 flex items-center flex-wrap flex-grow flex-shrink">
          {movies.slice(0, 4).map((movie) => (
              <div  className=" md:w-3/6 xl:w-1/4 p-6 w-1/2 flex items-center ">
              <div className="min-w-[150px] w-[300px] h-[500px]  rounded-t rounded-b-none ">
                <a
                  href="#"
                  className="flex justify-center flex-wrap no-underline hover:no-underline"
                  >
                  <img
                    className="rounded-[20px]"
                    width={300}
                    src={getPoster(movie.backdrop_path)}
                    />
                  <div className="w-full font-bold text-xl mt-5 text-gray-800 px-6">
                    {movie.title}
                  </div>
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
