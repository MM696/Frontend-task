"use client";

import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  tag: string;
  imageUrl: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
    tag: "NEW IMAGE MODEL",
    imageUrl: "/images/img.png",
  },
  {
    id: 2,
    title: "Open Source Model",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Try FLUX.1",
    tag: "OPEN SOURCE MODEL",
    imageUrl: "/images/img1.png",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item) => {
          const imageSrc = item.imageUrl?.trim() || "/images/fallback.jpg";

          return (
            <div
              key={item.id}
              className="w-full flex-shrink-0 relative h-72 sm:h-96 md:h-[28rem] rounded-xl overflow-hidden"
            >
              {/* Background image */}
              <img
                src={imageSrc}
                alt={item.title || "Carousel image"}
                className="object-cover w-full h-full"
                onError={(e) => {
                  console.error("Image failed to load:", imageSrc);
                  (e.currentTarget as HTMLImageElement).src = "/images/img.png";
                }}
              />

              {/* Dark overlay for better readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-0"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-end z-10 p-4 sm:p-6">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl w-full text-center font-extrabold text-white mb-6 sm:mb-10">
                  {item.title}
                </h1>

                {/* Subtitle */}
                <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-100 mb-3 sm:mb-4 text-center sm:text-left">
                  {item.subtitle}
                </h2>

                {/* Flex container for description + button */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6">
                  <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed sm:w-2/3 text-center sm:text-left">
                    {item.description}
                  </p>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:scale-110 transition-transform z-20"
      >
        <ArrowLeftCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:scale-110 transition-transform z-20"
      >
        <ArrowRightCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center space-x-3 mt-4">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gray-800 dark:bg-gray-200 w-8 h-2"
                : "bg-gray-300 dark:bg-gray-600 w-2 h-2 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  return (
    <div className="relative w-full mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Carousel />
        <Carousel />
      </div>
    </div>
  );
}
