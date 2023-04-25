import Image from "next/image";
import star from "../public/assets/star.png";
import spider from "../public/assets/spider.jpg";
import avenger from "../public/assets/avenger.jpg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "@/redux/modalSlice";


export default function Popular() {

  
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch()

  function openmodal() {
    if (!username) {
      dispatch(openLoginModal())
      return
    }
  }

  return (
    <>
      <section className="bg-gray-200 py-8" id="Franchises">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 data-aos="zoom-in" className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Top Franchises
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div  className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div data-aos="zoom-in-right" data-aos-delay="200" className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Star Wars
                </div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <div className="bg-black h-full flex items-center">
                  <Image src={star} width={500} className="mb-[100px] " />
                </div>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                <Link href="/StarWars">
                  <button onClick={openmodal} className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    See More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-8 text-3xl font-bold text-center">
                  spider-man
                </div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <Image src={spider} width={500} className="mt-[80px]" />
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                <Link href="/spiderman">
                  <button onClick={openmodal} className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    See More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-left" data-aos-delay="200" className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  The Avengers
                </div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>

                <Image src={avenger} width={500} />
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                <Link href="/Avengers">
                  <button onClick={openmodal} className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    See More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
