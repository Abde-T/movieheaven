export default function Footer(){

    return(
        <>
    <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
        
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
                ></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <section className="container mx-auto text-center py-6 mb-12">
    <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-white">
            <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>
              LANDING
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">FAQ</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">Help</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">Support</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">Terms</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">Facebook</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">Linkedin</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">Official Blog</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">About Us</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-200 hover:text-pink-500">Contact</a>
              </li>
            </ul>
          </div>
        </div>

    </section>
    </>
)
}