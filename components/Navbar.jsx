"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // import Link
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar({ isScrolled }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isVietnamese, setIsVietnamese] = useState(true);

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsVietnamese(lang.startsWith("vi"));
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 font-bold text-lg transition duration-300 ${
        isScrolled
          ? "bg-[#fcf6ef] backdrop-blur text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1">
          <Link href="/">
            <motion.div
              animate={{
                width: isHome ? 160 : 120,
                height: isHome ? 160 : 120,
                x: isHome ? 0 : 20,
              }}
              transition={{ duration: 0.3 }}
              className={isHome ? "" : "rounded-full p-1 cursor-pointer"}
            >
              <Image
                src="/images/logoBlackNB.png"
                width={160}
                height={160}
                quality={100}
                alt="Logo"
                className="object-contain"
              />
            </motion.div>
          </Link>
        </div>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-right text-xl md:text-4xl text-gray-700 italic font-playfair tracking-wide"
          >
            ~ where rest feels like returning ~
          </motion.div>
        )}
        {isHome && !isScrolled && (
          <ul className="hidden md:flex space-x-6 font-sans">
            <li>
              <Link href="/" className="hover:text-yellow-400 ">
                {isVietnamese ? <>Trang chủ</> : <>Home Page</>}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                {isVietnamese ? <>Về chúng tôi</> : <>About Us</>}
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
