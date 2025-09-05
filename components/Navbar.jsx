"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVietnamese, setIsVietnamese] = useState(true);

  // useEffect để xử lý cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        // Điều chỉnh ngưỡng cuộn tùy ý
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect để phát hiện ngôn ngữ trình duyệt
  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsVietnamese(lang.startsWith("vi"));
  }, []);

  // Components Navbar riêng biệt
  const DefaultNavbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 font-bold text-lg text-black bg-[#fcf6ef]">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="flex-1">
          <Link href="/">
            <div className="flex justify-center items-center space-x-2 md:justify-normal">
              <Image
                src="/images/logoBlackNB.png"
                width={120}
                height={100}
                alt="Logo"
                className="object-contain"
              />
            </div>
          </Link>
        </div>
        <div className="flex space-x-6 font-sans items-center ">
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                {isVietnamese ? "Trang chủ" : "Homepage"}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                {isVietnamese ? "Về chúng tôi" : "About us"}
              </Link>
            </li>
            <li>
              <Link href="/#footer" className="hover:text-yellow-400">
                {isVietnamese ? "Liên hệ" : "Connect with us"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  const ScrolledNavbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 font-bold text-lg transition duration-300 bg-[#fcf6ef] backdrop-blur text-black shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Image
                src="/images/logoBlackNB.png"
                width={100}
                height={100}
                alt="Logo"
                className="object-contain"
              />
            </motion.div>
          </Link>
        </div>
        <div className="flex-1 text-right text-xl md:text-3xl text-gray-700 italic font-playfair tracking-wide">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              ~&nbsp;where rest feels like returning&nbsp;~
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      <div className="h-24"></div> {/* Khoảng trắng để tránh nội dung bị che */}
      <AnimatePresence>
        {isScrolled ? (
          <motion.div
            key="scrolled-nav"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <ScrolledNavbar />
          </motion.div>
        ) : (
          <motion.div
            key="default-nav"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <DefaultNavbar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
