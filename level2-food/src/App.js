import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import CartPage from "./components/CartPage";
import { CartProvider, useCart } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-3 sticky-top">
      <Link className="navbar-brand fw-bold text-primary fs-4" to="/">
        🍴 FoodExpress
      </Link>

      <Link className="btn btn-outline-primary position-relative" to="/cart">
        🛒 Cart
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cart.length}
        </span>
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
