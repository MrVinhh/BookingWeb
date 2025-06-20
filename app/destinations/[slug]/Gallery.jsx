"use client";
import React, { useState, useEffect } from "react";

export default function Gallery({ destination }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);

  const hasVideo = destination?.video?.trim();
  const hasImages = destination?.images?.length;

  useEffect(() => {
    if (!hasImages || !videoEnded) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) =>
        prev + 1 < destination.images.length ? prev + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [destination, videoEnded, hasImages]);

  if (!hasImages && !hasVideo) return null;

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* KHUNG CHÍNH */}
      <div className="flex-1">
        {hasVideo && !videoEnded ? (
          <video
            controls
            autoPlay
            className="w-full h-[700px] object-contain bg-black rounded-xl border"
            onEnded={() => {
              setVideoEnded(true);
              setSelectedIndex(0);
            }}
          >
            <source src={destination.video} type="video/mp4" />
            Trình duyệt không hỗ trợ video.
          </video>
        ) : (
          <img
            src={destination.images[selectedIndex]}
            alt={`image-${selectedIndex}`}
            className="w-full h-[400px] object-contain bg-black rounded-xl border transition-all duration-500"
          />
        )}
      </div>

      {/* KHUNG THUMBNAILS */}
      <div className="w-full md:w-40">
        <div className="flex gap-3 overflow-x-auto md:overflow-y-auto md:flex-col max-h-[400px] scroll-smooth scrollbar-thin scrollbar-thumb-gray-300">
          {/* THUMBNAIL VIDEO */}
          {hasVideo && (
            <div
              onClick={() => {
                setVideoEnded(false);
              }}
              className={`w-20 h-20 flex-shrink-0 relative cursor-pointer rounded-md border hover:scale-105 transition
              ${!videoEnded ? "ring-2 ring-yellow-400" : "opacity-80"}`}
            >
              {/* Hình đại diện video hoặc biểu tượng */}
              <img
                src={destination.images[0] || "/video-thumb.jpg"}
                alt="video-thumb"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold">
                🎥
              </div>
            </div>
          )}

          {/* THUMBNAIL HÌNH ẢNH */}
          {destination.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              onClick={() => {
                setSelectedIndex(idx);
                setVideoEnded(true); // Khi click ảnh, bỏ video
              }}
              className={`w-30 h-20 flex-shrink-0 object-cover rounded-md border cursor-pointer hover:scale-105 transition m-1
                ${
                  selectedIndex === idx && videoEnded
                    ? "ring-2 ring-yellow-400"
                    : "opacity-80"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
