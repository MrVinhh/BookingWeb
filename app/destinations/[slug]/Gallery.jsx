"use client";

import React, { useState, useEffect } from "react";

export default function Gallery({ destination }) {
  if (!destination || !Array.isArray(destination.images)) {
    return <p className="p-10">Loading...</p>;
  }
  const [currentSlide, setCurrentSlide] = useState(0); // 0 = video, 1...n = images
  const [videoEnded, setVideoEnded] = useState(false);

  const hasVideo = Boolean(destination?.video?.trim());
  const hasImages =
    Array.isArray(destination?.images) && destination.images.length > 0;

  const totalSlides =
    (hasVideo ? 1 : 0) + (hasImages ? destination.images.length : 0);

  // Xác định đang là video hay hình
  const isVideoSlide = hasVideo && currentSlide === 0;
  const currentImageIndex = hasVideo ? currentSlide - 1 : currentSlide;

  const goToNext = () => {
    setVideoEnded(true); // Bỏ qua video khi next
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setVideoEnded(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!hasImages || isVideoSlide) return;
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, hasImages, isVideoSlide]);

  return (
    <div className="flex flex-col md:flex-row gap-10 relative">
      {/* KHUNG CHÍNH - Giữ nguyên */}
      <div className="flex-1 relative">
        {/* Nút PREV */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/80 text-black rounded-full flex items-center justify-center shadow hover:bg-white transition"
        >
          ◀
        </button>

        {/* Nút NEXT */}
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/80 text-black rounded-full flex items-center justify-center shadow hover:bg-white transition"
        >
          ▶
        </button>

        {/* HIỂN THỊ VIDEO hoặc HÌNH */}
        {isVideoSlide ? (
          <video
            controls
            autoPlay
            muted
            playsInline
            className="w-full h-[300px] md:h-[700px] md:w-[100%] object-contain bg-black rounded-xl border"
            onEnded={() => {
              setVideoEnded(true);
              setCurrentSlide(1);
            }}
          >
            <source src={destination.video} type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        ) : (
          <img
            src={destination.images[currentImageIndex]}
            alt={`image-${currentImageIndex}`}
            className="w-full h-[300px] md:h-[700px] md:w-[100%] object-contain bg-black rounded-xl border transition-all duration-500"
            // onError={(e) => (e.target.src = "/fallback.jpg")}
          />
        )}
      </div>

      {/* THUMBNAILS - Giữ nguyên */}
      <div className="w-full md:w-60 flex overflow-x-auto ư md:flex-col md:overflow-y-auto gap-4 md:max-h-[700px] scrollbar-thin scrollbar-thumb-gray-300">
        {/* Thumbnail Video */}
        {hasVideo && (
          <div
            onClick={() => setCurrentSlide(0)}
            className={`md:w-50 md:h-50 w-20 h-20 shrink-0 cursor-pointer relative border rounded-md overflow-hidden ${
              isVideoSlide ? "ring-2 ring-yellow-400" : "opacity-80"
            }`}
          >
            <img
              src={destination.images[0] || "/video-thumb.jpg"}
              alt="video-thumb"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 text-white text-lg font-bold flex items-center justify-center">
              🎥
            </div>
          </div>
        )}

        {/* Thumbnail Images */}
        {hasImages &&
          destination.images.map((img, idx) => {
            const slideIndex = hasVideo ? idx + 1 : idx;
            return (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => {
                  setVideoEnded(true);
                  setCurrentSlide(slideIndex);
                }}
                className={`md:w-50 md:h-50 w-20 h-20 shrink-0 object-cover border rounded-md cursor-pointer hover:scale-105 transition ${
                  currentSlide === slideIndex
                    ? "ring-2 ring-yellow-400"
                    : "opacity-80"
                }`}
                // onError={(e) => (e.target.src = "/fallback.jpg")}
              />
            );
          })}
      </div>
    </div>
  );
}
