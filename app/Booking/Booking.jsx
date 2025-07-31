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
      {showWelcome && (
        <AnimatePresence>
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
              <span className="text-black font-playfair">23homestay</span>
            </motion.h1>
          </motion.section>
        </AnimatePresence>
      )}
    </div>
  );
}
