import React from "react";
import image1 from "@/_assets/image1.png";
import image2 from "@/_assets/image 2.png";
import image3 from "@/_assets/image 3.png";
import image4 from "@/_assets/image 4.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const items = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    imageUrl: image1,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    rating: 3.5,
    imageUrl: image2,
    discount: "20%",
  },
  {
    id: 3,
    title: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    imageUrl: image3,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    imageUrl: image4,
    discount: "30%",
  },
];

const NewArrivals = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/user/ProductDetails");
  };
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-md p-2"
              onClick={handleNavigation}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold flex justify-start">
                {item.title}
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(item.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">{item.rating}/5</span>
              </div>
              <div className="text-xl font-semibold mt-2">
                ${item.price}{" "}
                {item.originalPrice && (
                  <span className="text-gray-500 line-through ml-2">
                    ${item.originalPrice}
                  </span>
                )}
                {item.discount && (
                  <span className="text-red-500 ml-2">{item.discount}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            router.push("/user/ProductList");
          }}
          className="mt-8 px-6 py-2 border rounded-full text-black hover:bg-gray-100"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
