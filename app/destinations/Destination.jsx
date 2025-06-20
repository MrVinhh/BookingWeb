"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+|-+$/g, "");

const districts = [
  "Tất cả",
  "Quận 4",
  "Quận 10",
  "Quận Bình Thạnh",
  "Quận Tân Phú",
  "Quận 6",
];

const DestinationSection = () => {
  const [images, setImages] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("Tất cả");
  const router = useRouter();

  useEffect(() => {
    const fetchDestinations = async () => {
      const res = await fetch("/api/homeStays");
      const data = await res.json();
      setImages(data);
    };
    fetchDestinations();
  }, []);

  const filteredDestinations =
    selectedDistrict === "Tất cả"
      ? images
      : images.filter((item) => item.district === selectedDistrict);

  const handleImageClick = (name) => {
    const slug = slugify(name);
    router.push(`/destinations/${slug}`);
  };

  return (
    <section className="py-20 bg-[#fcf6ef]">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">
          Điểm đến{" "}
          <span className="text-black font-playfair">23st.homestay</span>
        </h2>
        <p className="text-gray-600 mt-2">Chọn khu vực bạn quan tâm</p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {districts.map((district) => (
          <button
            key={district}
            onClick={() => setSelectedDistrict(district)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition
              ${
                selectedDistrict === district
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
              }`}
          >
            {district}
          </button>
        ))}
      </div>

      {/* Destination grid */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        <AnimatePresence>
          {filteredDestinations.map((dest) => (
            <motion.div
              key={dest.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleImageClick(dest.name)}
            >
              <img
                src={dest.images?.[0]}
                alt={dest.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{dest.name}</h3>
                <p className="text-sm text-gray-600">{dest.address}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DestinationSection;
