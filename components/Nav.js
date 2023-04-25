import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";

export default function Nav() {
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignupModal());
    dispatch(closeLoginModal());
  }

  return (
    <>
      <nav id="header" className="w-full absolute z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center ">
              <li className="mr-3">
                <a
                  className="inline-block font-bold text-[#f0dcae] no-underline hover:text-white hover:text-underline py-2 px-4"
                  href="#Trending"
                >
                  Trending
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block font-bold text-[#f0dcae] no-underline hover:text-white hover:text-underline py-2 px-4"
                  href="#Franchises"
                >
                  Top Franchises
                </a>
              </li>
            </ul>
            {!username && <LoginModal />}
            {!username && <SignupModal />}

            {
            username &&
              (
            <div
              onClick={handleSignOut}
              className="bottom-24 bg-[#f0dcae] bg-opacity-[50%] rounded-full cursor-pointer xl:px-2 xl:py-1 flex justify-center items-center space-x-1"
            >
              <img
                className=" w-12 h-12 rounded-full border-black border-[2px]
            object-cover 
            "
                src={user.photoUrl || "/assets/default.jpg"}
              />
              <div className="hidden xl:inline">
                <h1 className="font-bold text-black  whitespace-nowrap">{user.name}</h1>
                <h1 className="text-[#242424] ">@{user.username}</h1>
              </div>
            </div>)
            }

          </div>
        </div>
      </nav>
    </>
  );
}
