import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500">
      <nav className="bg-yellow-50 shadow-md p-4 flex justify-between items-center">
        <Link
          to="restaurant-ui/"
          className="text-2xl font-bold text-red-600 flex flex-grow"
        >
          Restaurant App
        </Link>
        <ul className="flex flex-row items-center justify-center relative top-1">
          <li className="mb-2 mr-4">
            <Link to="/admin" className="text-gray-700 hover:text-red-600">
              Admin
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/cart"
              className="text-gray-700 hover:text-red-600 flex flex-row"
            >
              Shopping Cart
              <svg
                className="w-6 h-6 text-gray-600 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m2-9h10l-2 9m-6-9h10M13 16h10"
                />
              </svg>
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
