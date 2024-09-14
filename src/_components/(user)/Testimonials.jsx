import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from SHOPY. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered SHOPY. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
  },
  {
    id: 3,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon SHOPY. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    id: 4,
    name: "Monica D.",
    text: "I've been a loyal customer of SHOPY for years, and they never disappoint. The quality of their clothes is top-notch, and their customer service is exceptional.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from SHOPY. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 6,
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered SHOPY. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
  },
  {
    id: 3,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon SHOPY. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    id: 4,
    name: "Monica D.",
    text: "I've been a loyal customer of SHOPY for years, and they never disappoint. The quality of their clothes is top-notch, and their customer service is exceptional.",
    rating: 5,
  },
  {
    id: 1,
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from SHOPY. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered SHOPY. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
  },
  {
    id: 3,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon SHOPY. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    id: 4,
    name: "Monica D.",
    text: "I've been a loyal customer of SHOPY for years, and they never disappoint. The quality of their clothes is top-notch, and their customer service is exceptional.",
    rating: 5,
  },
  // Add more testimonials as needed
];
const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (scrollRef.current) {
        scrollRef.current.classList.add("scroll-pause");
      }
    };

    const handleMouseLeave = () => {
      if (scrollRef.current) {
        scrollRef.current.classList.remove("scroll-pause");
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", handleMouseEnter);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">OUR HAPPY CUSTOMERS</h2>
        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="scroll-container gap-5 pb-5 ">
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 border rounded-lg shadow-md p-4 bg-white"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < testimonial.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
