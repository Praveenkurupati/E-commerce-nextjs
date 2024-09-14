"use client";
import React, { useState } from "react";
import ProductReviews from "@/_components/(user)/ProductReviews";
import ProductList from "@/_components/(user)/ProductList";
import image5 from "@/_assets/image 5.png";
import image6 from "@/_assets/image 6.png";
import image11 from "@/_assets/image 11.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(image5);
  const images = [image5, image6, image11, image5];
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/user/cart");
  };

  return (
    <div>
      <div className="flex flex-row lg:flex-row max-w-6xl mx-auto my-5 p-5 space-y-5 lg:space-y-0 lg:space-x-10">
        <div className="flex-shrink-0 w-full lg:w-1/6 flex flex-col space-y-3 overflow-y-auto max-h-96">
          {images.map((image, idx) => (
            <Image
              key={idx}
              src={image}
              alt={`T-shirt ${idx + 1}`}
              onClick={() => setSelectedImage(image)}
              className={`cursor-pointer border-2 ${
                selectedImage === image ? "border-black" : "border-transparent"
              }`}
            />
          ))}
        </div>
        <div className="lg:w-2/6">
          <Image
            src={selectedImage}
            alt="Selected T-shirt"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full lg:w-3/6">
          <h1 className="text-3xl font-bold mt-5">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center mt-2">
            <div className="flex items-center text-yellow-500">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
            </div>
            <span className="ml-2 text-gray-700">4.5/5</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">$260</span>
            <span className="line-through ml-2 text-gray-500">$300</span>
            <span className="ml-2 text-red-500">-40%</span>
          </div>
          <p className="mt-5 text-gray-700">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="mt-5">
            <h3 className="text-lg font-medium">Select Colors</h3>
            <div className="flex space-x-3 mt-2">
              <div className="w-8 h-8 bg-green-900 rounded-full cursor-pointer"></div>
              <div className="w-8 h-8 bg-blue-900 rounded-full cursor-pointer"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full cursor-pointer"></div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-medium">Choose Size</h3>
            <div className="flex space-x-3 mt-2">
              <button className="px-4 py-2 border rounded-md">Small</button>
              <button className="px-4 py-2 border rounded-md">Medium</button>
              <button className="px-4 py-2 border rounded-md bg-black text-white">
                Large
              </button>
              <button className="px-4 py-2 border rounded-md">X-Large</button>
            </div>
          </div>
          <div className="mt-5 flex items-center space-x-3">
            <button
              className="px-6 py-3 bg-black text-white rounded-md"
              onClick={handleNavigation}
            >
              Add to Cart
            </button>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 border rounded-md">-</button>
              <span>1</span>
              <button className="px-4 py-2 border rounded-md">+</button>
            </div>
          </div>
        </div>
      </div>
      <ProductReviews />
    </div>
  );
};

export default ProductDetails;
