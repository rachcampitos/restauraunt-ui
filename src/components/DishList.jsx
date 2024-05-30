import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDishes } from "../features/dishesSlices";
import { addToCart } from "../features/cartSlice";

const DishList = () => {
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.dishes.dishes);

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  const handleAddToCart = (dish) => {
    dispatch(addToCart({ ...dish, price: dish.price || 10 }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-6">
      {dishes && dishes.length > 0 ? (
        dishes.map((dish) => (
          <div
            key={dish.idMeal}
            className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-md rounded-md py-4 px-2 relative"
          >
            <img
              src={dish.strMealThumb}
              alt={dish.strMeal}
              className="w-64 mx-auto transform transition duration-300 rounded-md"
            />
            <div className="flex flex-col items-center my-3 space-y-2">
              <h2 className="text-gray-900 text-lg">{dish.strMeal}</h2>
              <p className="text-gray-500 text-sm text-center">
                {dish.strCategory}
              </p>
              <p className="text-gray-900 text-2xl font-bold">
                ${dish.price || 10}
              </p>
              <button
                onClick={() => handleAddToCart(dish)}
                className="bg-red-500 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No dishes found for the selected category.</p>
      )}
    </div>
  );
};

export default DishList;
