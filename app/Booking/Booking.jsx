"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function BookingSection() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {showWelcome ? (
          <motion.section
            key="welcome"
            className="rounded-xl shadow-lg flex justify-center items-center min-h-[300px] px-4 text-center bg-gradient-to-br from-yellow-100 via-white to-yellow-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold text-yellow-600 tracking-wide"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              Welcome to{" "}
              <span className="text-black font-playfair">23st.homestay</span>
            </motion.h1>
          </motion.section>
        ) : (
          <motion.section
            key="contact"
            className="rounded-xl shadow-lg flex flex-col justify-center items-center min-h-[300px] px-4 bg-gradient-to-br from-yellow-20 via-white to-yellow-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 font-sans">
              Liên hệ với chúng tôi
            </h2>

            {/* Desktop: icon + chữ */}
            <div className="hidden md:flex gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=61577012275973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <FaFacebookF />
                <span className="font-poppins">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/23st.homestay/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
              >
                <FaInstagram />
                <span className="font-poppins">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@23st.homestay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                <FaTiktok />
                <span className="font-poppins">TikTok</span>
              </a>
            </div>

            {/* Mobile: chỉ icon, tròn */}
            <div className="flex md:hidden gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577012275973"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/23st.homestay/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@23st.homestay"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <FaTiktok />
              </a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
