import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

    // Calculate total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className={"container mx-auto my-3"} style={styles.container}>
            <h2>🛒 Cart</h2>

            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div key={index} style={styles.item}>
                            <span>{item.name}</span>
                            <span>₹{item.price}</span>
                            <button className={"text-red-600"} onClick={() => removeFromCart(index)}>
                                Remove
                            </button>
                        </div>
                    ))}

                    <hr />
                    <h3>Total: ₹{total}</h3>
                </>
            )}
        </div>
    );
}

const styles = {
    container: {
        padding: "10px",
        border: "1px solid #ddd",
    },
    item: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px",
    },
};