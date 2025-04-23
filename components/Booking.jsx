"use client";
import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import { motion } from "framer-motion";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    location: null,
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
  });

  // Mặc định điền vị trí hiện tại và tìm quận/huyện, tỉnh
  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.geolocation?.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        // Reverse Geocoding API
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1&countrycodes=VN&language=vi`
        );
        const data = await res.json();

        // Lọc thông tin quận/huyện và tỉnh/thành phố
        const address = data.address;
        const city =
          address.city || address.town || address.village || address.state;
        const district = address.suburb || address.county || address.district;

        const label = `${district ? district : city}, ${address.state}`;
        setFormData((prev) => ({
          ...prev,
          location: { label, value: { lat, lon } },
        }));
      });
    }
  }, []);

  const handleLocationChange = (selectedOption) => {
    setFormData({ ...formData, location: selectedOption });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Đặt lịch tại: ${formData.location?.label}
Từ ${formData.checkInDate} → ${formData.checkOutDate} (${formData.guests} khách)`
    );
  };

  // Hàm tìm kiếm (autocomplete) chỉ trả về các cấp hành chính như quận, huyện, tỉnh
  const loadOptions = (inputValue, callback) => {
    if (!inputValue) return callback([]);

    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}&addressdetails=1&countrycodes=VN&limit=10&language=vi`
    )
      .then((res) => res.json())
      .then((data) => {
        const options = data
          .filter((item) => {
            const address = item.address;
            return (
              (address.city || address.town || address.village) && // Thành phố, thị xã, làng, v.v.
              (address.state || address.district || address.suburb) // Tỉnh, huyện, quận, v.v.
            );
          })
          .map((item) => ({
            label: item.display_name,
            value: { lat: item.lat, lon: item.lon },
          }));

        callback(options);
      });
  };

  return (
    <motion.section
      className="rounded-xl shadow-lg flex justify-center items-center bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        {/* Location Autocomplete */}
        <div className="w-full md:w-1/3 min-w-[220px]">
          <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            onChange={handleLocationChange}
            value={formData.location}
            placeholder="Chọn Quận/ Huyện"
            className="text-sm"
          />
        </div>

        {/* Check-in & Check-out */}
        <div className="flex gap-2 w-full md:w-[30%] min-w-[200px]">
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Guest Count */}
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          className="w-full md:w-24 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
          placeholder="Khách"
          required
        />

        {/* Button */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition whitespace-nowrap"
        >
          Đặt lịch ngay
        </motion.button>
      </form>
    </motion.section>
  );
}
