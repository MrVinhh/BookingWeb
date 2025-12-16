// app/destinations/Destination.jsx

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
  "Quận 1",
  "Quận 4",
  "Quận 6",
  "Quận 10",
  "Quận 11",
  "Quận Bình Thạnh",
  "Quận Tân Phú",
];
const districtsEn = [
  "All",
  "District 1",
  "District 4",
  "District 6",
  "District 10",
  "District 11",

  "Binh Thanh District",
  "Tan Phu District",
];

// Nhận props homeStays một cách chính xác
const DestinationSection = ({ homeStays }) => {
  const router = useRouter();
  const [selectedDistrict, setSelectedDistrict] = useState("Tất cả");
  const [isVietnamese, setIsVietnamese] = useState(true);

  // Thêm một useEffect để xử lý dữ liệu props khi nó thay đổi
  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    const vi = lang.startsWith("vi");
    setIsVietnamese(vi);
    setSelectedDistrict(vi ? "Tất cả" : "All");
  }, []);

  // Filter danh sách homestay dựa trên dữ liệu props nhận được
  const filteredDestinations =
    selectedDistrict === (isVietnamese ? "Tất cả" : "All")
      ? homeStays
      : homeStays?.filter((item) =>
          isVietnamese
            ? item.district === selectedDistrict
            : item.districtEn === selectedDistrict,
        );

  const handleImageClick = (destination) => {
    // Không cần localStorage nữa, bạn có thể truyền dữ liệu qua state hoặc query params
    const slug = slugify(destination.name);
    router.push(`/destinations/${slug}`);
  };

  // Dùng toán tử optional chaining (?) để tránh lỗi khi data chưa kịp tải
  if (!homeStays || homeStays.length === 0) {
    return <p>Đang tải...</p>;
  }

  return (
    <section className="py-10 bg-white">
      <div className="mb-8 md:mx-6 max-w-max mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl md:text-3xl font-bold font-inter">
          {isVietnamese ? "Vị trí 23Homestay" : "23Homestay Location"}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-8xl w-[96%] mx-auto">
        <div className="flex flex-row flex-wrap lg:flex-col lg:gap-10 gap-4 mb-6">
          {(isVietnamese ? districtsVi : districtsEn).map((district) => (
            <button
              key={district}
              onClick={() => setSelectedDistrict(district)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition duration-300 whitespace-nowrap lg:px-6 lg:py-4 lg:text-lg 
                ${
                  selectedDistrict === district
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-300 hover:bg-gray-100"
                }`}
            >
              {district}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-[70%] mx-auto">
          <AnimatePresence>
            {/* Vòng lặp trên biến đã được filter */}
            {filteredDestinations?.map((dest) => (
              <motion.div
                key={dest.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer w-[90%] mx-auto h-max"
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
                  <h3 className="text-lg font-semibold font-inter">
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
      </div>
    </section>
  );
};

export default DestinationSection;
