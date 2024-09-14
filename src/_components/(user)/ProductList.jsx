import React, { useState } from "react";
import Image from "next/image";
import image1 from "@/_assets/image1.png";
import image2 from "@/_assets/image 2.png";
import image3 from "@/_assets/image 3.png";
import image4 from "@/_assets/image 4.png";
import image5 from "@/_assets/image 7.png";
import image6 from "@/_assets/image 8.png";
import image7 from "@/_assets/image 9.png";
import image8 from "@/_assets/image 4.png";

const ProductList = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    price: [50, 200],
    colors: [],
    size: [],
    dressStyle: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.5,
      image: image1,
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image: image2,
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      rating: 5.0,
      image: image3,
    },
    { id: 4, name: "Skinny Fit Jeans", price: 240, rating: 5.0, image: image4 },
    { id: 5, name: "Checkered Shirt", price: 180, rating: 4.5, image: image5 },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      rating: 3.5,
      image: image6,
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      price: 212,
      rating: 5.0,
      image: image7,
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image: image5,
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image: image8,
    },
  ];

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      if (filterType === "price") {
        updatedFilters.price = value;
      } else if (
        filterType === "colors" ||
        filterType === "size" ||
        filterType === "dressStyle"
      ) {
        if (updatedFilters[filterType].includes(value)) {
          updatedFilters[filterType] = updatedFilters[filterType].filter(
            (item) => item !== value
          );
        } else {
          updatedFilters[filterType].push(value);
        }
      }
      return updatedFilters;
    });
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.price >= selectedFilters.price[0] &&
      product.price <= selectedFilters.price[1] &&
      (selectedFilters.colors.length === 0 ||
        selectedFilters.colors.includes(product.color)) &&
      (selectedFilters.size.length === 0 ||
        selectedFilters.size.includes(product.size)) &&
      (selectedFilters.dressStyle.length === 0 ||
        selectedFilters.dressStyle.includes(product.dressStyle))
    );
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="flex pb-24">
      <div className="w-1/5 p-5 border-r">
        <div className="mb-5">
          <h3 className="p-4 font-bold mb-2">Filters</h3>
          <ul className="space-y-2">
            {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map(
              (category) => (
                <li
                  key={category}
                  className="pl-9 text-xl font-semibold cursor-pointer hover:text-gray-700"
                >
                  {category} &gt;
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="font-bold mb-2">Price</h3>
          <div>
            <input
              type="range"
              min="50"
              max="200"
              value={selectedFilters.price[0]}
              onChange={(e) =>
                handleFilterChange("price", [
                  Number(e.target.value),
                  selectedFilters.price[1],
                ])
              }
              className="w-full"
            />
            <input
              type="range"
              min="50"
              max="200"
              value={selectedFilters.price[1]}
              onChange={(e) =>
                handleFilterChange("price", [
                  selectedFilters.price[0],
                  Number(e.target.value),
                ])
              }
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="font-bold mb-2">Colors</h3>
          <div className="flex flex-wrap">
            {[
              "#00FF00",
              "#FF0000",
              "#FF00FF",
              "#0000FF",
              "#FFA500",
              "#FFFF00",
              "#00FFFF",
              "#000000",
            ].map((color) => (
              <div
                key={color}
                className={`w-12 h-12 rounded-full mr-2 mb-2 cursor-pointer ${
                  selectedFilters.colors.includes(color)
                    ? "border-2 border-black"
                    : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleFilterChange("colors", color)}
              />
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h3 className="font-bold mb-2">Size</h3>
          <div className="flex flex-wrap">
            {[
              "X-Small",
              "Small",
              "Medium",
              "Large",
              "X-Large",
              "XX-Large",
              "4X-Large",
            ].map((size) => (
              <button
                key={size}
                className={`px-3 py-1 m-1 border rounded-full ${
                  selectedFilters.size.includes(size)
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => handleFilterChange("size", size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h3 className="font-bold mb-2">Dress Style</h3>
          <ul className="space-y-2">
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
              <li
                key={style}
                className="pl-9 text-xl font-semibold cursor-pointer hover:text-gray-700"
              >
                {style} &gt;
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full py-2 bg-black text-white rounded-full">
          Apply Filter
        </button>
      </div>

      <div className="w-3/4 p-5">
        <h2 className="text-2xl font-bold mb-5">Casual</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentProducts.map((product) => (
            <div key={product.id} className="border p-3 rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold mb-1">{product.name}</h4>
              <p className="text-sm text-gray-700 mb-2">${product.price}</p>
              <div className="flex items-center mb-2">
                <div className="flex items-center text-yellow-500">
                  {"⭐️".repeat(Math.floor(product.rating))}
                  {"⭐️"
                    .repeat(5 - Math.floor(product.rating))
                    .replaceAll("⭐️", "☆")}
                </div>
                <span className="ml-2 text-gray-700">{product.rating}/5</span>
              </div>
              <button className="w-full py-2 bg-black text-white rounded-md">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-5">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="py-2 px-4 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`py-2 px-4 rounded-md ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="py-2 px-4 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
