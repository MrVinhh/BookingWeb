"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import nude11 from "@/public/images/nude11.jpg";

// Component nhận props homeStays từ bên ngoài
export default function ImageSlider({ homeStays }) {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([]);
  const [isVietnamese, setIsVietnamese] = useState(true);

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    const vi = lang.startsWith("vi");
    setIsVietnamese(vi);
  }, []);

  useEffect(() => {
    if (homeStays && homeStays.length > 0) {
      const allMainImages = homeStays.map((item) => item.images[0]);
      setImages(allMainImages);
    }
  }, [homeStays]);

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
      <div className="h-screen flex items-center justify-center text-gray-800 text-xl font-sans bg-gray-50">
        Đang tải...
      </div>
    );
  }

  return (
    <div className="bg-white py-20">
      <div className="max-w-max px-6 text-center mx-auto md:text-left md:mx-6">
        <h2 className="text-3xl md:text-5xl font-bold font-inter mb-4">
          23 Homestay - Where rest feels like returning
        </h2>
        <p className="text-base md:text-l italic font-inter text-gray-600 mx-auto max-w-max md:text-left md:mx-2">
          {isVietnamese
            ? "23homestay không chỉ là một nơi để ở — mà là một không gian sống hiện đại, tiện nghi và đầy cảm hứng dành cho những người trẻ yêu thích sự tự do và kết nối. Mỗi căn phòng mang một màu sắc riêng, giúp bạn dễ dàng “chill”, làm việc hay đơn giản là tận hưởng khoảng trời riêng của mình."
            : "23homestay isn't just a place to stay — it's a modern, comfortable, and inspiring space for young people who value freedom and connection. Each room has its own character, perfect for chilling, working, or simply enjoying your own space."}
        </p>
      </div>
      <div className="relative w-[96%] h-80 md:h-96 mt-10 rounded-lg overflow-hidden shadow-lg mx-auto">
        <Image
          src={nude11}
          alt="Phòng ngủ homestay"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-10 mb-6 max-w-max mx-auto px-6 text-center md:text-left md:mx-6">
        <h2 className="text-3xl font-bold font-inter">
          {isVietnamese ? "Bộ sưu tập 23Homestay" : "23Homestay Collection"}
        </h2>
      </div>

      <section className="relative w-[96%] max-w-8xl mx-auto h-[500px] overflow-hidden rounded-lg shadow-lg mt-10">
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

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-3 -translate-y-1/2 z-10 w-7 h-7 md:w-8 md:h-8 bg-black/20 text-white rounded-full shadow backdrop-blur-sm hover:bg-black/50 transition flex items-center justify-center text-xs md:text-sm"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-3 -translate-y-1/2 z-10 w-7 h-7 md:w-8 md:h-8 bg-black/20 text-white rounded-full shadow backdrop-blur-sm hover:bg-black/50 transition flex items-center justify-center text-xs md:text-sm"
        >
          &#8250;
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                i === current
                  ? "bg-black scale-110"
                  : "bg-white border border-black"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
