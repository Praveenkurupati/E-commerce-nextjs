import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React from "react";

const styles = [
  {
    id: 1,
    title: "Casual",
    imageUrl: "/casual.png",
  },
  {
    id: 2,
    title: "Formal",
    imageUrl: "/formal.png",
  },
  {
    id: 3,
    title: "Party",
    imageUrl: "/party.png",
  },
  {
    id: 4,
    title: "Gym",
    imageUrl: "/gym.png",
  },
];

const BrowseByDressStyle = () => {
  const router = useRouter();
  return (
    <section className="py-12 bg-gray-100">
      <div
        className="container mx-auto px-6 text-center"
        onClick={() => {
          router.push("/user/ProductList");
        }}
      >
        <h2 className="text-3xl font-bold mb-8">BROWSE BY DRESS STYLE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {styles.map((style) => (
            <div
              key={style.id}
              className="relative h-56 border rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={style.imageUrl}
                alt={style.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded-md">
                <h3 className="text-lg font-bold">{style.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByDressStyle;
