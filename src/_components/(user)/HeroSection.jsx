import Image from "next/image";
import React from "react";
import heroImage from "@/_assets/heroImage.png";
import { useRouter } from "next/navigation";
const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="relative flex items-center justify-center bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button
            className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800"
            onClick={() => {
              router.push("/user/ProductList");
            }}
          >
            Shop Now
          </button>
          <div className="mt-12 flex justify-center lg:justify-start space-x-12">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold">200+</h2>
              <p className="text-gray-700">International Brands</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold">2,000+</h2>
              <p className="text-gray-700">High-Quality Products</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold">30,000+</h2>
              <p className="text-gray-700">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src={heroImage} // Ensure you have the image in your public/images directory
            alt="Fashion models"
            className="w-full lg:w-3/4"
          />
        </div>
      </div>
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          width="100"
          height="100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0L61.8034 18.1966H82.4528L66.3262 29.4714L74.455 50L58.3284 38.7252L50 57.4211L41.6716 38.7252L25.545 50L33.6738 29.4714L17.5472 18.1966H38.1966L50 0Z"
            fill="#000"
          />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
        <svg
          width="100"
          height="100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0L61.8034 18.1966H82.4528L66.3262 29.4714L74.455 50L58.3284 38.7252L50 57.4211L41.6716 38.7252L25.545 50L33.6738 29.4714L17.5472 18.1966H38.1966L50 0Z"
            fill="#000"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
