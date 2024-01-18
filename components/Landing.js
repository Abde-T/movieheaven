import { useDispatch, useSelector } from "react-redux";
import bt from "../public/assets/bg.jpg";
import logo from "../public/assets/Popcorn.png";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Link from "next/link";
import LoginModal from "./modals/LoginModal";

export default function Landing({ data, id }) {
  const username = useSelector((state) => state.user.username);

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
    fetchResults();
    setPage(page + 1);
  }

  return (
    <>
      <div className=" h-[90vh] w-full flex flex-col justify-around items-center  ">
        <div className="container relative  px-3 mx-auto flex  md:flex-wrap flex-col justify-evenly  h-full md:flex-row items-center">
          <div className="text-[#e41212]  flex flex-col w-full h-3/5 xl:mt-[100px]  md:w-2/5 justify-around items-start text-center md:text-left">
            <div className="flex h-full ">
              <div>
                <ul
                  data-aos="fade-right"
                  className="hidden text-xl  absolute top-[30px] left-0 md:flex  "
                >
                  <li className="mr-3">
                    <a
                      className="inline-block font-bold text-[#e41212] no-underline hover:text-[#000000] hover:text-underline py-2 px-4"
                      href="#Trending"
                    >
                      Trending
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="inline-block font-bold text-[#e41212] no-underline hover:text-[#000000] hover:text-underline py-2 px-4"
                      href="#Franchises"
                    >
                      Top Franchises
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-around border rounded-[50px] h-[80%] md:h-[80%] md:mt-[50px] lg:h-[100%] lg:mt-[35px] p-5 mr-7 shadow-none border-none md:shadow-[#e41212] md:shadow-4xl md:bg-[#38070700]">
                <div className="flex md:mt-[0px] mt-[-30px] max-[450px]:mt-[10px]">
                  <Link href="/">
                    <Image
                      data-aos="zoom-in"
                      className="w-[100px] z-40 hover:scale-105 "
                      width={100}
                      src={logo}
                      alt="Picture"
                    />
                  </Link>
                  <h1
                    // data-aos="zoom-in"
                    className="my-4 md:text-slate-100 xl:text-3xl text-[#e41212] text-xl lg:text-2xl md:text-xl font-bold leading-tight hover:scale-105"
                  >
                    Movie <br /> Heaven
                  </h1>
                </div>
                <h1
                  // data-aos="zoom-in"
                  className=" my-4 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm text-lg font-bold leading-tight"
                >
                  <span className="text-white">
                    Elevate Your Entertainment Experience with{" "}
                  </span>{" "}
                  Movie Heaven:{" "}
                  <span className="text-white">
                    a premier movie streaming platform. Discover, watch, and
                    enjoy a curated collection of the latest blockbuster hits
                    and timeless classics. Your gateway to unparalleled
                    cinematic experiences awaits! 🍿🎬
                  </span>
                </h1>
                {username && (
                  <div data-aos="zoom-in" className="z-50">
                    <SearchBar
                      handleClick={handleClick}
                      query={query}
                      setQuery={setQuery}
                    />
                  </div>
                )}

                {!username && <LoginModal />}
              </div>
            </div>
          </div>
          <div className=" w-full md:w-3/5  text-center">
            <Image
              // data-aos="zoom-in"
              className="lg:block rounded-[50px] md:mt-[100px] mt-[-50px] xl:w-[100%]  xl:visible lg:w-[100%] md:w-[100%]  xl:ml-5 mx-auto h-[100%] shadow-2xl "
              width={1000}
              height={1000}
              src={bt}
              alt="Picture"
            />
          </div>
        </div>
      </div>
      <div className="relative z-30 -mt-12 lg:-mt-24">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.200000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}
