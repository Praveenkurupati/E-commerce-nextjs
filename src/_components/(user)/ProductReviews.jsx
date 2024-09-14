import React, { useState } from "react";

const ProductReviews = () => {
  const [activeSection, setActiveSection] = useState("rating");

  const renderSection = () => {
    switch (activeSection) {
      case "details":
        return (
          <div className="p-5">
            <h2 className="text-xl font-bold mb-4">Product Details</h2>
            <p>Here are the detailed information about the product...</p>
          </div>
        );
      case "rating":
        return (
          <div className="p-5">
            <h2 className="text-xl font-bold mb-4">Rating & Reviews</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {reviews.map((review, index) => (
                <div key={index} className="border p-5 rounded-lg shadow-md">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-500">
                      {"⭐️".repeat(review.rating)}
                      {"⭐️".repeat(5 - review.rating).replaceAll("⭐️", "☆")}
                    </div>
                    <span className="ml-2 text-gray-700">{review.name}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Posted on {review.date}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center align-middle py-3">
              <button className="mt-5 px-4 py-2 bg-black text-white rounded-md">
                Load More Reviews
              </button>
            </div>
          </div>
        );
      case "faqs":
        return (
          <div className="p-5">
            <h2 className="text-xl font-bold mb-4">FAQs</h2>
            <p>Here are some frequently asked questions about the product...</p>
          </div>
        );
      default:
        return null;
    }
  };

  const reviews = [
    {
      name: "Samantha D.",
      rating: 5,
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to t-shirt.",
      date: "August 14, 2023",
    },
    {
      name: "Alex M.",
      rating: 5,
      comment:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "August 15, 2023",
    },
    {
      name: "Ethan R.",
      rating: 4,
      comment:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "August 16, 2023",
    },
    {
      name: "Olivia P.",
      rating: 5,
      comment:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "August 17, 2023",
    },
    {
      name: "Liam K.",
      rating: 4,
      comment:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "August 18, 2023",
    },
    {
      name: "Ava H.",
      rating: 4.5,
      comment:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: "August 19, 2023",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-10 p-5">
      <div className="flex justify-between border-b">
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeSection === "details" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveSection("details")}
        >
          Product Details
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeSection === "rating" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveSection("rating")}
        >
          Rating & Reviews
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeSection === "faqs" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveSection("faqs")}
        >
          FAQs
        </button>
      </div>
      <div className="mt-5 transition-all duration-300 ease-in-out">
        {renderSection()}
      </div>
    </div>
  );
};

export default ProductReviews;
