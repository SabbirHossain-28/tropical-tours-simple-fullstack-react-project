import { useState } from "react";
import sliderImg1 from "../../assets/images/banner1.jpg"
import sliderImg2 from "../../assets/images/banner2.jpg"
import sliderImg3 from "../../assets/images/banner3.jpg"
import sliderImg4 from "../../assets/images/banner4.jpg"
import sliderImg5 from "../../assets/images/banner5.jpg"

export const CarouselMain = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    { img: sliderImg1, tags: "Room" },
    { img: sliderImg2, tags: "Room" },
    { img: sliderImg3, tags: "Room" },
    { img: sliderImg4, tags: "Room" },
    { img: sliderImg5, tags: "Room" },
  ];
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  return (
    <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
      {/* arrow */}
      <button
        onClick={nextSlider}
        className="absolute flex justify-center items-center right-2 bottom-1/2 md:bottom-1/2 lg:bottom-10 bg-slate-200 rounded-full z-50 w-8 h-8 md:w-8 md:h-8 "
      >
        <svg
          viewBox="0 0 1024 1024"
          className="w-4 h-4 md:w-6 md:h-6 icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(180)"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>
      {/* slider container */}
      <div
        className="ease-linear duration-300 flex gap-4"
        style={{ transform: `translateX(-${currentSlider * 52}%)` }}
      >
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <div
            key={inx}
            className={`${
              currentSlider === inx
                ? "h-[310px] md:h-[310px] lg:h-[580px] "
                : "h-[260px] md:h-[280px] lg:h-[480px]"
            } min-w-[50%]   relative duration-200`}
          >
            <img src={slide.img} className="w-full h-full rounded-lg" alt={slide.tags} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative mt-4 mb-12">
      <div className="bg-[#f3f9fc] w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
      <div className="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold font-rancho">
        Experience the Magic of Tropical Destinations
        </h1>
        <p className="text-[#616161] text-xs md:text-lg">
        Escape the ordinary and embrace the extraordinary with Tropical Tours. With our passion for travel and dedication to excellence, we create immersive experiences that go beyond the ordinary tourist path. Let us take you on a journey of discovery and wonder.
        </p>
        <button className="font-bold font-rancho py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#2f9fb8]">
          Explore More
        </button>
      </div>
      <CarouselMain />
    </div>
  );
};
