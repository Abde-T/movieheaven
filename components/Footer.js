import Link from "next/link";
import logo from "../public/assets/Popcorn.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <svg
        className="wave-top "
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section className="container mx-auto text-center py-6 bg-[#242424]">
        <div className="w-full flex flex-col  items-center md:flex-row py-6">
          <div className="flex mb-6">
            <Link
              href="/"
              className="text-[#f0dcae] no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            >
              <Image
                className="w-[100px] z-40 hover:scale-105"
                width={1000}
                src={logo}
                alt="Picture"
              />
            </Link>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  Help
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  Terms
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  Official Blog
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  About Us
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  
                  className="no-underline hover:underline text-gray-200 cursor-not-allowed hover:text-[#f0dcae]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
