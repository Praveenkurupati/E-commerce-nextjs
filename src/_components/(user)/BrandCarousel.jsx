import React, { useRef, useEffect } from "react";

const BrandCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animation;

    const startScrolling = () => {
      animation = carousel.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(-${carousel.scrollWidth / 2}px)` },
        ],
        {
          duration: 20000,
          iterations: Infinity,
          easing: "linear",
        }
      );
    };

    const stopScrolling = () => {
      if (animation) {
        animation.cancel();
      }
    };

    startScrolling();

    carousel.addEventListener("mouseenter", stopScrolling);
    carousel.addEventListener("mouseleave", startScrolling);

    return () => {
      carousel.removeEventListener("mouseenter", stopScrolling);
      carousel.removeEventListener("mouseleave", startScrolling);
    };
  }, []);

  return (
    <div className="overflow-hidden bg-black text-white py-4">
      <div ref={carouselRef} className="flex space-x-12 items-center">
        <span className="text-6xl font-bold">VERSACE</span>
        <span className="text-6xl font-bold">ZARA</span>
        <span className="text-6xl font-bold">GUCCI</span>
        <span className="text-6xl font-bold">PRADA</span>
        <span className="text-6xl font-bold">Calvin Klein</span>
      </div>
    </div>
  );
};

export default BrandCarousel;
