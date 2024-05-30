import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getDishes } from "../features/dishesSlices";

const FilterTags = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dishes.categories);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleFilter = (category) => {
    setActiveCategory(category.strCategory);
    dispatch(getDishes(category.strCategory));
  };

  return (
    <div className="flex flex-wrap items-center justify-center space-x-2 mt-4 px-6">
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <button
            key={category.strCategory}
            onClick={() => handleFilter(category)}
            className={`py-1 px-4 m-1 rounded-full text-sm transition-colors ${
              activeCategory === category.strCategory
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-red-600 hover:text-white"
            }`}
          >
            {category.strCategory}
          </button>
        ))
      ) : (
        <p>No categories found</p>
      )}
    </div>
  );
};

export default FilterTags;
