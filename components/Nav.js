import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

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
      <nav id="header"  className="w-full absolute z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div
            className="relative w-full flex-grow lg:flex lg:items-center lg:w-auto  mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <div className=" absolute right-0 top-[25px]  w-[200px] flex ">
            {!username && <LoginModal />}
            {!username && <SignupModal />}
            </div>

            {
            username &&
              (
            <div
              onClick={handleSignOut}
              className="absolute right-2 top-5 bg-[#f0dcae] bg-opacity-[50%] rounded-full cursor-pointer xl:px-2 xl:py-1 flex justify-center items-center space-x-1"
            >
              <img
                className=" w-12 h-12 rounded-full border-black border-[2px]
            object-cover 
            "
                src={user.photoUrl || "/assets/default.jpg"}
                loading="lazy"
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
