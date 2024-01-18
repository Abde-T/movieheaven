import tmdb from "@/api/tmdb";
import SearchBar from "@/components/SearchBar";
import ProgressCircle from "@/ui/ProgressCirlce";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/assets/Popcorn.png";
import Image from "next/image";
import Trending from "@/components/Trending";
import { Skeleton } from "@mui/material";

export default function search() {
  const getPoster = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`;
  };

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchResults() {
    const apiKey = "5ab490b5f6681ee3678d3ad287d1d366";
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    setResults(data.results);
  }

  function handleClick() {
    setPage(page + 1);
    fetchResults();
  }

  return (
    <>
      <div className="py-10 relative ">
        <div className="z-40 flex justify-around items-center max-[400px]:w-[80%] w-[60%] absolute top-[75%] max-[400px]:left-[40%] left-[45%] translate-x-[-50%] translate-y-[-50%]">
          <Link href="/">
            <Image
              className="w-[100px] hover:scale-105 "
              width={1000}
              src={logo}
              alt="Picture"
            />
          </Link>
          <div className="w-full">
          <SearchBar
            handleClick={handleClick}
            query={query}
            setQuery={setQuery}
            />
            </div>
        </div>
      </div>

      <section className="my-6 flex flex-col justify-center items-center ">
        <div className="container  mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-left text-slate-100">
            Search Result:
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-[#e41212] w-164 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full md:w-1/3 flex items-center flex-wrap flex-grow flex-shrink">
            {results.map(
              (movie) =>
                movie.backdrop_path && (
                  <div
                    key={movie.id}
                    className=" md:w-3/6 xl:w-1/4 p-3 w-1/2 flex items-center "
                  >
                    <div className="min-w-[150px] w-[300px] md:h-[500px] sm:h-[50%]  rounded-t rounded-b-none ">
                      <Link
                        href={`/movie/${movie.id}`}
                        className="flex justify-center flex-wrap no-underline hover:no-underline"
                      >
                        <div className="relative">
                          <img
                            loading="lazy"
                            className="rounded-[20px] border-2 border-slate-100"
                            alt="poster"
                            width={300}
                            src={
                              getPoster(movie.poster_path) ||
                              getPoster(movie.backdrop_path)
                            }
                          />
                          <div className="cursor-pointer hover:scale-105 absolute bottom-[-40px] translate-y-[-50%] translate-x-[-50%] right-[-40px]">
                            <ProgressCircle
                              percent={Math.floor(movie.vote_average * 10)}
                            />
                          </div>
                        </div>
                        <div className="w-full font-bold text-xl mt-5 text-slate-100 px-6">
                          {movie.title}
                        </div>
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        {results.length > 0 && (
          <Link href="/search">
            <button
              className="border0  rounded-md w-[100px] h-[50px] bg-[#e41212] text-slate-100"
              onClick={handleClick}
            >
              Load More
            </button>
          </Link>
        )}
      </section>

      <Trending />
    </>
  );
}
