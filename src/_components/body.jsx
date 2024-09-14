import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import mainImage1 from "@/_assets/mainImage1.png";
import mainImage2 from "@/_assets/mainImage2.png";
import mainImage3 from "@/_assets/mainImage3.png";
import secondImage from "@/_assets/secondImage.png";
import imageThree from "@/_assets/imageThree.png";
import NewInImage1 from "@/_assets/NewInImage1.png";
import NewInImage2 from "@/_assets/NewInImage2.png";
import NewInImage3 from "@/_assets/NewInImage3.png";
import ItemList from "./(user)/itemList";
import NewArrivals from "./(user)/NewArrivals";
import TopSelling from "./(user)/TopSelling";
import BrowseByDressStyle from "./(user)/BrowseByDressStyle";
import Testimonials from "./(user)/Testimonials";
import HeroSection from "./(user)/HeroSection";
import BrandCarousel from "./(user)/BrandCarousel";

const Body = () => {
  const router = useRouter();
  const [mainimage, setMainimage] = useState(mainImage1);
  const [newInImage, setNewInImage] = useState(NewInImage1);

  const signupAlertshandler = () => {
    router.push("/register");
  };
  const shopNowHandler = () => {
    router.push("/itemView");
  };

  return (
    <main className="body">
      <HeroSection />
      <BrandCarousel />
      <div className="top-pics-div p-4">
        <NewArrivals />
      </div>
      <div className="top-pics-div p-4">
        <TopSelling />
      </div>
      <BrowseByDressStyle />
      <Testimonials />
    </main>
  );
};

export default Body;
