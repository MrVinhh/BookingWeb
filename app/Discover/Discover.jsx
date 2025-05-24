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
        <h2 className="text-4xl font-bold">Khám phá 23st.Homestay</h2>
        <p className="text-gray-600 mt-2">
          Không gian sống hiện đại, đầy cảm hứng
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
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
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-yellow-50 w-full rounded-2xl p-4 shadow-md hover:shadow-xl transition flex flex-col justify-between min-h-[300px]">
                <img
                  src={item.images?.[0]} // dùng ảnh đầu tiên
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DiscoverSlider;
