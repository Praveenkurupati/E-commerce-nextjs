import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@mui/material";
import useGet from "../../_customhooks/useFetch";
import ItemCard from "./itemCard";

const ItemList = () => {
  const [carouselItems, setCarouselItems] = useState(4); // Default number of items per slide
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  // Using useGet to fetch items
  const { data: items, loading, error } = useGet(`/products/${userId}`);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setCarouselItems(2);
      } else if (windowWidth >= 768 && windowWidth <= 991) {
        setCarouselItems(3);
      } else {
        setCarouselItems(4);
      }
    };

    // Initial call to set carousel items based on window width
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reference for controlling the carousel slides
  const carouselRef = useRef(null);

  // Chunk items into arrays based on carouselItems
  const chunkedItems = [];
  if (items) {
    for (let i = 0; i < items.length; i += carouselItems) {
      chunkedItems.push(items.slice(i, i + carouselItems));
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto max-w-[1643px] overflow-hidden px-5">
      <center>
        <h2 className="text-2xl font-bold">Top Picks For You</h2>
      </center>
      <div ref={carouselRef} style={{ overflowX: "hidden" }}>
        {chunkedItems.map((chunk, index) => (
          <div key={index}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {chunk.map((item) => (
                <Grid item xs={6} sm={6} md={3} lg={3} key={item._id}>
                  <ItemCard item={item} isLoading={loading} />
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
