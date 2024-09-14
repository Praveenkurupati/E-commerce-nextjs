import React from "react";

const RatingStars = ({ rating }) => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={
            i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
          }
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
