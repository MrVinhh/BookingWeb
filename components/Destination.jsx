import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const destinations = [
  {
    name: "23st.Studio Bình Thạnh",
    address: "Quận Bình Thạnh, TP. HCM",
    district: "Quận Bình Thạnh",
    image: "/images/hsBinhThanh1.jpg",
  },
  {
    name: "23st.Studio Bình Thạnh 2",
    address: "Quận Bình Thạnh, TP. HCM",
    district: "Quận Bình Thạnh",
    image: "/images/hsBinhThanh2.jpg",
  },
  {
    name: "23st.Studio Tân Phú 1",
    address: "Quận Tân Phú, TP. HCM",
    district: "Quận Tân Phú",
    image: "/images/hsTanPhu.jpg",
  },
  {
    name: "23st.Studio Tân Phú 2",
    address: "Quận Tân Phú, TP. HCM",
    district: "Quận Tân Phú",
    image: "/images/hsTanPhu2.jpg",
  },
  {
    name: "23st.Studio Tô Hiến Thành 1",
    address: "Quận 10, TP. HCM",
    district: "Quận 10",
    image: "/images/hsToHienThanh1.jpg",
  },
  {
    name: "23st.Studio Tô Hiến Thành 2",
    address: "Quận 10, TP. HCM",
    district: "Quận 10",
    image: "/images/hsToHienThanh2.jpg",
  },
  {
    name: "23st.Studio Xóm Chiếu 1",
    address: "Quận 4, TP. HCM",
    district: "Quận 4",
    image: "/images/hsXomChieu1.jpg",
  },
  {
    name: "23st.Studio Xóm Chiếu 2",
    address: "Quận 4, TP. HCM",
    district: "Quận 4",
    image: "/images/hsXomChieu1.jpg",
  },
];

const districts = [
  "Tất cả",
  "Quận 4",
  "Quận 10",
  "Quận Bình Thạnh",
  "Quận Tân Phú",
];

const DestinationSection = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("Tất cả");

  const filteredDestinations =
    selectedDistrict === "Tất cả"
      ? destinations
      : destinations.filter((item) => item.district === selectedDistrict);

  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Điểm đến 23st.Studio</h2>
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
          {filteredDestinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              className="bg-white rounded-xl shadow hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={dest.image}
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
