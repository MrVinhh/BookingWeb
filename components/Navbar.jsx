import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar({ isScrolled }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 font-bold text-lg transition duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          animate={{
            width: isScrolled ? 100 : 160,
            height: isScrolled ? 100 : 160,
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/logoNoBackground.png"
            width={160}
            height={160}
            quality={100}
            alt="Picture of the author"
          />
        </motion.div>
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-yellow-400 cursor-pointer">Trang chủ</li>
          <li className="hover:text-yellow-400 cursor-pointer">Về chúng tôi</li>
          <li className="hover:text-yellow-400 cursor-pointer">Dự án</li>
          <li className="hover:text-yellow-400 cursor-pointer">Liên hệ</li>
        </ul>
      </div>
    </nav>
  );
}
