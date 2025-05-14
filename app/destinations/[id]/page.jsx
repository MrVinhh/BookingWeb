"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const DestinationDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [destination, setDestination] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fetch data
  useEffect(() => {
    const fetchDestination = async () => {
      const res = await fetch("/api/homeStays");
      const data = await res.json();
      const found = data.find((d) => d.id === parseInt(id));
      setDestination(found);
    };

    if (id) fetchDestination();
  }, [id]);

  // Auto-play images
  useEffect(() => {
    if (!destination?.images || destination.images.length === 0) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) =>
        prev + 1 < destination.images.length ? prev + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [destination]);

  if (!destination) return <div className="p-10 text-center">Loading...</div>;

  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        {/* Nút Quay về */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm text-blue-600 hover:underline"
        >
          ←
        </button>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {destination.name}
        </h1>
        <p className="text-gray-600 mb-6">{destination.address}</p>

        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Image */}
          <div className="flex-1">
            <img
              src={destination.images[selectedIndex]}
              alt="Main"
              className="w-full h-[400px] object-cover rounded-xl border transition-all duration-500"
            />
          </div>

          {/* Thumbnails */}
          <div className="md:w-40 flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
            {destination.images.map((img, idx) => (
              <img
                key={`${img}-${idx}`}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setSelectedIndex(idx)}
                className={`w-20 h-20 object-cover rounded-md border cursor-pointer hover:scale-105 transition
                  ${
                    selectedIndex === idx
                      ? "ring-2 ring-yellow-500"
                      : "opacity-80"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Mô tả</h2>
          <p className="text-gray-700 leading-relaxed">
            {destination.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetail;
