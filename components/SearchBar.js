import Link from "next/link";

export default function SearchBar(props) {
  return (
    <>
        <form onSubmit={props.searchMovies}>
          <label
          
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative md:w-[400px] w-[200px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#f0dcae] focus:border-[#f0dcae] dark:bg-transparent dark:border-[#f0dcae] dark:placeholder-[#f0dcae] dark:text-white dark:focus:ring-[#f0dcae] dark:focus:border-[#f0dcae]"
              placeholder="Search..."
              value={props.query}
              onChange={(e) => props.setQuery(e.target.value)}
            />
            <Link href="/search">
            <button
            type="button"
              className="text-[#242424] absolute right-2.5 bottom-2.5 bg-[#f0dcae] hover:bg-[#f0dcae] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#f0dcae] dark:hover:bg-[#f0dcae] dark:focus:ring-[#f0dcae]"
              onClick={props.handleClick}
              
              >
              Search
            </button>
             </Link>
          </div>
        </form>
    </>
  );
}
