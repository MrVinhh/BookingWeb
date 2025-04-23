"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/hsTanPhu.jpg",
  "/images/hsTanPhu2.jpg",
  "/images/hsBinhThanh1.jpg",
  "/images/hsBinhThanh2.jpg",
  "/images/hsToHienThanh1.jpg",
  "/images/hsToHienThanh2.jpg",
  "/images/hsXomChieu1.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt="slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current
                ? "bg-yellow-500"
                : "bg-white border border-yellow-500"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
