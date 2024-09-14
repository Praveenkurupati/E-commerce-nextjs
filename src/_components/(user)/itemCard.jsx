// import { useState } from "react";
// import { Rating, Skeleton } from "@mui/material";
// import { API_PATH, token } from "../(Auth)/api";

// // Calculate average rating
// const calculateAverageRating = (ratings) => {
//   const acceptedRatings = ratings.filter(
//     (rating) => rating.status === "Accepted"
//   );
//   if (acceptedRatings.length > 0) {
//     const sum = acceptedRatings.reduce((acc, rating) => acc + rating.rating, 0);
//     return sum / acceptedRatings.length;
//   }
//   return 0;
// };

// const ItemCard = ({ isLoading, item }) => {
//   const [isWishlisted, setIsWishlisted] = useState(item.inWishlist || false);

//   const handleWishlistToggle = (e) => {
//     e.stopPropagation(); // Prevents the click from also triggering the card click event
//     setIsWishlisted((prevState) => !prevState);
//     addToWishlist(item._id); // Call function to add to wishlist
//   };

//   const handleCardClick = () => {
//     const url = `/buyNow/product/${item._id}`;
//     window.open(url, "_blank");
//   };

//   const addToWishlist = (itemId) => {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       fetch(`${API_PATH}/addtowishlist`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           productId: itemId,
//           userId: userId,
//         }),
//       })
//         .then((response) => {
//           if (response.ok) {
//             console.log("Item added to wishlist successfully.");
//           } else {
//             console.error("Failed to add item to wishlist.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error adding item to wishlist:", error);
//         });
//     } else {
//       console.error("User is not logged in.");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="item-card p-4">
//         <Skeleton variant="rectangular" width={210} height={118} />
//         <Skeleton variant="rounded" animation="wave" width="60%" />
//         <Skeleton variant="rounded" animation="wave" width="40%" />
//         <Skeleton variant="rounded" animation="wave" width="80%" />
//       </div>
//     );
//   }

//   return (
//     <div
//       className="item-card p-4 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
//       onClick={handleCardClick}
//     >
//       <div className="relative w-full h-64">
//         <img
//           className="w-full h-full object-cover rounded-lg"
//           src={item.images[0]}
//           alt="Item"
//         />
//         <span
//           className={`heart-icon absolute top-2 right-2 text-2xl ${
//             isWishlisted ? "text-red-500" : "text-gray-400"
//           }`}
//           onClick={handleWishlistToggle}
//         >
//           {isWishlisted ? "❤️" : "🤍"}
//         </span>
//       </div>
//       <div className="item-details mt-4">
//         <div className="item-description text-lg font-bold">{item.name}</div>
//         <div className="prices mt-2">
//           {item.discountedPrice ? (
//             <>
//               <div className="actual-price text-gray-500 line-through">
//                 INR {item.actualPrice}
//               </div>
//               <div className="discounted-price text-red-500 font-bold">
//                 Now INR {item.discountedPrice}
//               </div>
//             </>
//           ) : (
//             <div className="actual-price text-gray-800">
//               INR {item.actualPrice}
//             </div>
//           )}
//         </div>
//         <div className="rating mt-2">
//           <Rating
//             name="half-rating-read"
//             defaultValue={calculateAverageRating(item.ratings)}
//             precision={0.5}
//             readOnly
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;

const ItemCard = () => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-xs mx-auto">
      <div className="relative">
        <img
          src="/t-shirt.png"
          alt="T-shirt with Tape Details"
          className="w-full rounded-lg"
        />
        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md">
          New
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">T-shirt with Tape Details</h2>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-500">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span className="text-gray-300">&#9733;</span>
          </div>
          <span className="text-gray-600 ml-2">4.5/5</span>
        </div>
        <div className="text-xl font-semibold mt-2">$120</div>
      </div>
    </div>
  );
};

export default ItemCard;
