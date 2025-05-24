"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // import Link
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar({ isScrolled }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 font-bold text-lg transition duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.div
            animate={{
              width: isHome ? 160 : 80,
              height: isHome ? 160 : 80,
              x: isHome ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className={isHome ? "" : "rounded-full bg-black p-1 cursor-pointer"}
          >
            <Image
              src="/images/logoNoBackground.png"
              width={160}
              height={160}
              quality={100}
              alt="Logo"
              className="object-contain"
            />
          </motion.div>
        </Link>

        {isHome && (
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-yellow-400">
                Dự án
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400">
                Liên hệ
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
