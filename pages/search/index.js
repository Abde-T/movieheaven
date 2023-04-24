import tmdb from "@/api/tmdb";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        <div className="z-40  absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <SearchBar
          handleClick={handleClick}
          query={query}
          setQuery={setQuery}
          />
        </div>
      </div>

      <section className="py-8 flex flex-col justify-center items-center ">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-left text-[#f0dcae]">
            Search Result: {query}
          </h2> 
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-[#f0dcae] w-164 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full  md:w-1/3 flex items-center flex-wrap flex-grow flex-shrink">
            {results.slice(0,12).map((movie) => (
              <div key={movie.id} className=" md:w-1/3 p-6 flex items-center flex-col flex-grow flex-shrink">
                <div className="min-w-[150px] w-[300px] h-[500px]  rounded-t rounded-b-none ">
                  <a
                    href="#"
                    className="flex justify-center flex-wrap no-underline hover:no-underline"
                  >
                    <img
                      className="rounded-[20px] border border-[#f0dcae]"
                      alt="poster"
                      width={300}
                      src={getPoster(movie.poster_path) || getPoster(movie.backdrop_path)}
                    />
                    <div className="w-full font-bold text-xl mt-5 text-[#f0dcae] px-6">
                      {movie.title}
                    </div>
                  </a>
                </div>
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

      <Footer />
    </>
  );
}
