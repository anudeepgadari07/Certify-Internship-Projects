import data from "../data/restaurants.json";
import { useCart } from "../context/CartContext";

export default function RestaurantList() {
  const { addToCart } = useCart();

  return (
    <div className="container py-4">

      <h2 className="fw-bold mb-4 text-dark">
        🍽️ Featured Restaurants
      </h2>

      <div className="row g-4">
        {data.map((restaurant) => (
          <div key={restaurant.id} className="col-md-6 col-lg-4">
            <div className="card shadow-sm p-3 border-0 h-100 restaurant-card">
              <h5 className="fw-bold text-primary mb-2">
                {restaurant.name}
              </h5>

              <div className="menu-list">
                {restaurant.menu.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center menu-item py-2"
                  >
                    <div className="d-flex align-items-center">
                      <span className="me-2">🍛</span>
                      <strong>{item.name}</strong> — ₹{item.price}
                    </div>

                    <button
                      className="btn btn-sm btn-success rounded-pill px-3"
                      onClick={() => addToCart(item)}
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
