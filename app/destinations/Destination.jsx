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

const districtsVi = [
  "Tất cả",
  "Quận 4",
  "Quận 10",
  "Quận Bình Thạnh",
  "Quận Tân Phú",
  "Quận 6",
];
const districtsEn = [
  "All",
  "District 4",
  "District 10",
  "Binh Thanh District",
  "Tan Phu District",
  "District 6",
];

const DestinationSection = ({ homeStays }) => {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("Tất cả");
  const [isVietnamese, setIsVietnamese] = useState(true);

  // Detect language once
  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    const vi = lang.startsWith("vi");
    setIsVietnamese(vi);
    setSelectedDistrict(vi ? "Tất cả" : "All");
  }, []);

  // Handle data loading + caching
  useEffect(() => {
    if (homeStays?.length > 0) {
      setImages((prev) => {
        const prevIds = prev.map((p) => p.id).join(",");
        const newIds = homeStays.map((h) => h.id).join(",");
        // Only update if different
        if (prevIds !== newIds) {
          localStorage.setItem("homestayList", JSON.stringify(homeStays));
          return homeStays;
        }
        return prev;
      });
    } else {
      const cached = localStorage.getItem("homestayList");
      if (cached) {
        setImages(JSON.parse(cached));
      } else {
        const fetchDestinations = async () => {
          const res = await fetch("/api/homeStays");
          const data = await res.json();
          setImages(data);
          localStorage.setItem("homestayList", JSON.stringify(data));
        };
        fetchDestinations();
      }
    }
  }, [homeStays]);

  const filteredDestinations =
    selectedDistrict === (isVietnamese ? "Tất cả" : "All")
      ? images
      : images.filter((item) =>
          isVietnamese
            ? item.district === selectedDistrict
            : item.districtEn === selectedDistrict
        );

  const handleImageClick = (destination) => {
    localStorage.setItem("selectedDestination", JSON.stringify(destination));
    const slug = slugify(destination.name);
    router.push(`/destinations/${slug}`);
  };

  return (
    <section className="py-20 bg-[#fcf6ef]">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-playfair">
          {isVietnamese ? "Điểm đến" : "Destinations"}{" "}
          <span className="text-black font-playfair">23homestay</span>
        </h2>
        <p className="text-gray-600 mt-2 font-sans">
          {isVietnamese
            ? "Chọn khu vực bạn quan tâm"
            : "Choose your area of interest"}
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 font-poppins">
        {(isVietnamese ? districtsVi : districtsEn).map((district) => (
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
              onClick={() => handleImageClick(dest)}
            >
              <img
                src={dest.images?.[0]}
                alt={dest.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold font-playfair">
                  {dest.name}
                </h3>
                <p className="text-sm text-gray-600 font-sans">
                  {isVietnamese ? dest.address : dest.addressEn}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DestinationSection;
