"use client";
import React, { useState } from "react";
import image1 from "@/_assets/image1.png";
import image2 from "@/_assets/image 2.png";
import image3 from "@/_assets/image 3.png";
import Image from "next/image";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: image1,
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: image2,
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: image3,
    },
  ]);

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg mb-4"
            >
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-sm text-gray-600">Color: {item.color}</p>
                  <p className="mt-2">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="border rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="border rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
                <button
                  className="ml-4 text-red-600"
                  onClick={() => handleRemove(item.id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount (-20%)</span>
            <span className="text-red-600">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="border p-2 rounded-l-lg w-full"
            />
            <button className="bg-black text-white p-2 rounded-r-lg">
              Apply
            </button>
          </div>
          <button className="bg-black text-white w-full py-3 rounded-lg">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
