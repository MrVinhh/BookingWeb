"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const res = await fetch("/api/homeStays");
      const data = await res.json();
      const allMainImages = data.map((item) => item.images[0]);
      setImages(allMainImages);
    };

    fetchDestinations();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-xl font-sans">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`slide-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Nút Prev */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 z-10 
        w-7 h-7 md:w-8 md:h-8 
        bg-white/20 rounded-full shadow backdrop-blur-sm 
        hover:bg-white transition flex items-center justify-center text-xs md:text-sm"
      >
        &#8249;
      </button>

      {/* Nút Next */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 z-10 
        w-7 h-7 md:w-8 md:h-8 
        bg-white/20 rounded-full shadow backdrop-blur-sm 
        hover:bg-white transition flex items-center justify-center text-xs md:text-sm"
      >
        &#8250;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
              i === current
                ? "bg-yellow-500 scale-110"
                : "bg-white border border-yellow-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
