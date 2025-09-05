"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DiscoverSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const res = await fetch("/api/homeStays");
      const data = await res.json();
      setImages(data);
    };
    fetchDestinations();
  }, []);

  return (
    <section className="py-10 bg-white text-black">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold font-inter">
          Khám phá <span className="text-black">23homestay</span>
        </h2>
        <p className="text-gray-600 mt-2 font-sans">
          Không gian sống hiện đại, đầy cảm hứng
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Swiper component */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#fcf6ef] w-full rounded-2xl p-4 shadow-md hover:shadow-xl transition flex flex-col min-h-[280px]">
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-inter">
                    {item.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev swiper-button-prev-custom !text-black rounded-full w-10 h-10 flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        <div className="swiper-button-next swiper-button-next-custom !text-black rounded-full w-10 h-10 flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10" />
      </div>
    </section>
  );
};

export default DiscoverSlider;
