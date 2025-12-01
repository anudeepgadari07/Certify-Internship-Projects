import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, total, clearCart } = useCart();

  return (
    <div className="container py-4">
      <h2 className="mb-3">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="list-group mb-3">
          {cart.map(i => (
            <li key={i.id} className="list-group-item d-flex justify-content-between">
              <div>{i.name} x {i.qty}</div>
              <div>
                ₹{i.price * i.qty}
                <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFromCart(i.id)}>
                  −
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h5>Total: ₹{total}</h5>
      <button className="btn btn-primary w-100 my-2"
        onClick={() => { alert("Order Placed ✅"); clearCart(); }}>
        Checkout
      </button>

      <Link to="/" className="btn btn-outline-secondary w-100">
        ⬅ Back to Restaurants
      </Link>
    </div>
  );
}
