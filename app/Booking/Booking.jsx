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
            className="rounded-xl shadow-lg flex justify-center items-center min-h-[300px] bg-gradient-to-br from-yellow-100 via-white to-yellow-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-yellow-600 tracking-wide text-center "
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
            className="rounded-xl shadow-lg flex flex-col justify-center items-center min-h-[300px] bg-gradient-to-br from-yellow-20 via-white to-yellow-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Liên hệ với chúng tôi để đặt lịch
            </h2>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=61577012275973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <FaFacebookF />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/23st.homestay/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
              >
                <FaInstagram />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@23st.homestay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                <FaTiktok />
                TikTok
              </a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
