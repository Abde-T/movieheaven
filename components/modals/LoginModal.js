import { auth } from "@/firebase";
import {
  closeLoginModal,
  closeSignupModal,
  openLoginModal,
} from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function handleGuestSignIn() {
    await signInWithEmailAndPassword(auth, "guest15510@gmail.com", "123456");
  }

  return (
    <>
      <button
        id="navAction"
        className="mx-auto lg:mx-0 hover:underline bg-[#f0dcae] text-gray-800 font-bold rounded-[20px] mt-4 lg:mt-0 py-1 px-4 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        onClick={() => dispatch(openLoginModal())}

     >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px] bg-[#242424] text-white md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg
        flex justify-center
        "
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="mt-4 font-bold text-4xl text-gray-300">
              Sign in to your account
            </h1>
            <input
              placeholder="Email"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="bg-gray-300 text-black w-full font-bold
                text-lg p-2 mt-8 rounded-md
                "
              onClick={handleSignIn}
            >
              Sign In
            </button>

            <h1 className="text-center mt-8 font-bold text-lg">or</h1>
            <button
              className="bg-gray-300 text-black w-full font-bold
                text-lg p-2 rounded-md mt-4
                "
              onClick={handleGuestSignIn}
            >
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
