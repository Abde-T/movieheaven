import Link from "next/link";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar(props) {
  return (
    <>
        <form onSubmit={props.searchMovies}>
          <label
          
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative md:w-[400px]  w-[200px]">
          
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
              className=" text-[#242424] absolute right-2.5 bottom-2.5 bg-[#f0dcae] hover:bg-[#f0dcae] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#f0dcae] dark:hover:bg-[#f0dcae] dark:focus:ring-[#f0dcae]"
              onClick={props.handleClick}
              
              >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            </Link>
          </div>
        </form>
    </>
  );
}
