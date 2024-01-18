import Link from "next/link";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar(props) {
  return (
    <>
        <form onSubmit={props.searchMovies}>
          <label
            className="mb-2 text-sm font-medium text-slate-100 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-[80%] mx-auto">
          
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-slate-100 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#e41212] focus:border-[#e41212] dark:bg-transparent dark:border-[#e41212] dark:placeholder-slate-100 dark:text-white dark:focus:ring-[#e41212] dark:focus:border-[#e41212]"
              placeholder="Search..."
              value={props.query}
              onChange={(e) => props.setQuery(e.target.value)}
            />
            <Link href="/search">
            <button
            type="button"
              className=" text-slate-100 absolute right-2.5 bottom-2.5 bg-[#e41212] hover:bg-[#e41212] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#e41212] dark:hover:bg-[#e41212] dark:focus:ring-[#e41212]"
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
