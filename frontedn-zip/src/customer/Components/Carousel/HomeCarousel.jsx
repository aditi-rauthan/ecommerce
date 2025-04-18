import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate();
  const item = homeCarouselData.map((item) => (
    <div className="flex justify-center items-center p-4">

 
    <img
      className="cursor-pointer -z-10 w-full max-w-[90%] h-[70vh] object-cover rounded-lg"
      onClick={() => navigate(item.path)}
      src={item.image}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />
       </div>
  ));
  return (
    <div className="w-full flex justify-center mx-auto mb-12">
    <AliceCarousel
      mouseTracking
      items={item}
      autoPlay
      infinite
      autoPlayInterval={2000}
      disableButtonsControls
    />
    </div>
  );
};

export default HomeCarousel;
