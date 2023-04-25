import tmdb from "@/api/tmdb";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
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


  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);


  async function fetchResults() {
    const apiKey = '5ab490b5f6681ee3678d3ad287d1d366';
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

      <section className="my-6 flex flex-col justify-center items-center  ">
        <div className="container  mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-left text-[#f0dcae]">
            Search Result: {query}
          </h2> 
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-[#f0dcae] w-164 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full   md:w-1/3 flex items-center flex-wrap flex-grow flex-shrink">
            {
              results.length>0 ? 
                results.map((movie) => (
                  movie.backdrop_path &&
                  <div key={movie.id} className=" md:w-3/6 xl:w-1/4 p-3 w-1/2 flex items-center ">
                <div className="min-w-[150px] w-[300px] h-[500px]  rounded-t rounded-b-none ">
                  <Link
                    href={`/movie/${movie.id}`}
                    className="flex justify-center flex-wrap no-underline hover:no-underline"
                  >
                    <div className="relative">
                    <img
                      className="rounded-[20px] border border-[#f0dcae]"
                      alt="poster"
                      width={300}
                      src={getPoster(movie.poster_path) || getPoster(movie.backdrop_path)}
                      />
                     <div className="cursor-pointer hover:scale-105 absolute bottom-[-40px] translate-y-[-50%] translate-x-[-50%] right-[-40px]">
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
              )) : 
              new Array(20).fill(0).map((_, index) => (
                <div  key={index} className="p-2">
                  <Skeleton variant="rectangular" width={210} height={300} />
                </div>
                ))}

          </div>
        </div>

      {results.length > 0 
      && 
      <Link  href="/search">
      <button className="border0  rounded-sm w-[100px] h-[50px] bg-[#f0dcae]" onClick={handleClick}>Load More</button>
      </Link>
      }
      </section>

      <Trending/>
      <Footer />
    </>
  );
}
