import { Provider } from "react-redux";
import { store } from "./store";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DishList from "./components/DishList";
import SearchBar from "./components/SearchBar";
import FilterTags from "./components/FilterTags";
import ShoppingCart from "./components/ShoppingCart";
import Admin from "./components/Admin";
import Header from "./components/Header";

const AppContent = () => {
  const location = useLocation();
  const showSearchAndFilters = location.pathname === "restaurant-ui/";

  return (
    <>
      <Header />
      {showSearchAndFilters && (
        <section className="header-banner h-96 w-full bg-yellow-50">
          <SearchBar />
        </section>
      )}
      {showSearchAndFilters && (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
          <FilterTags />
        </section>
      )}
      <Routes path="restaurant-ui/">
        <Route path="/" element={<DishList />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;
