import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="w-full bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
            <img className="rounded-base mb-6" src={product.image} alt="product" style={{height: "200px", width: "100%", objectFit: "contain"}}/>
            <div>
                <h5 className="text-xl text-heading font-semibold tracking-tight">{product.name}</h5>
                <div className="flex items-center justify-between mt-6">
                    <span className="text-3xl font-extrabold text-heading">${product.price}</span>
                    <button type="button"
                            className="inline-flex items-center text-white bg-blue-600 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
                            onClick={() => addToCart(product)}>
                        <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
    },
};