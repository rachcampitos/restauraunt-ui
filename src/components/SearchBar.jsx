import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDishes } from "../features/dishesSlices";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getDishes(query));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700">
        Best recipes for you
      </h1>
      <div className="rounded-full shadow-md p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dishes..."
          className=" rounded-full px-4 focus:outline-none w-full bg-transparent"
        />
        <button
          onClick={handleSearch}
          className="text-sm bg-red-500 py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
