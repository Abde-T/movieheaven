import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import ProgressCircle from "@/ui/ProgressCirlce";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../../public/assets/Popcorn.png";

function Movie() {
  const getPoster = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`;
  };

  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchMovie() {
      const apiKey = "5ab490b5f6681ee3678d3ad287d1d366";
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      const data = await res.json();
      setMovie(data);
    }
    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (!movie) {
    return <div></div>;
  }

  function handleClick() {
    setPage(page + 1);
  }

  return (
    <>
      <div className="py-10 relative">
        <Nav />
        <div className="z-40  absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Link href="/">
            <Image
              className="w-[100px] absolute top-[-35%] left-[-70%] z-40 hover:scale-105 "
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
        <section className="relative z-30 bg-black overflow-hidden flex  items-center justify-evenly">
          <img
            src={getPoster(movie.poster_path || movie.backdrop_path)}
            className="w-[100%] h-[1000px] absolute object-cover 	opacity-[50%] blur-[15px]"
          />

          <div className="relative min-h-[calc(100vh-200px)] flex items-center  ">
            <img
              src={getPoster(movie.backdrop_path)}
              className="w-[350px] hidden md:block"
            />
          </div>
          <div className=" inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50 ">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              {movie.title || movie.original_name}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img alt="" className="h-6 md:h-8" />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>

              <button
                className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
                
              >
                <img alt="" className="h-6 md:h-8" />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>
              <div className="cursor-pointer hover:scale-105">
                <ProgressCircle percent={Math.floor(movie.vote_average*10)} />
              </div>
             
            </div>

            <p className="text-xs md:text-xl text-white">
              {movie.release_date || movie.first_air_date} •{" "}
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m •{" "}
              {movie.genres.map((genre) => genre.name + " ")}{" "}
            </p>
            <h4 className="text-white text-sm md:text-lg max-w-4xl">
              {movie.overview}
            </h4>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Movie;
