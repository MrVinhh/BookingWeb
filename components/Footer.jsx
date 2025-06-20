"use client";

import React from "react";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [isVietnamese, setIsVietnamese] = useState(true);

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsVietnamese(lang.startsWith("vi"));
  }, []);
  return (
    <footer className="bg-black text-white py-8 text-lg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: About */}
          <div>
            <h2 className="text-lg font-bold mb-4">
              {isVietnamese ? "Về 23.homestay" : "About 23.homestay"}
            </h2>
            <p className="text-sm leading-relaxed">
              {isVietnamese ? (
                <>
                  23.homestay không chỉ là một nơi để ở — mà là một không gian
                  sống hiện đại, tiện nghi và đầy cảm hứng dành cho những người
                  trẻ yêu thích sự tự do và kết nối. Mỗi căn phòng mang một màu
                  sắc riêng, giúp bạn dễ dàng “chill”, làm việc hay đơn giản là
                  tận hưởng khoảng trời riêng của mình.
                </>
              ) : (
                <>
                  23.homestay isn&apos;t just a place to stay. — it&apos;s a
                  modern, cozy, and inspiring space for young souls who crave
                  freedom and connection. Each room has its own vibe, perfect
                  for chilling, working, or simply enjoying your private time in
                  style.
                </>
              )}
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-400">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-400">
                  Giới thiệu
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <p className="text-sm">Email: 23studio.hs@gmail.com</p>
            <p className="text-sm">SĐT: 0909417817 | 0916430333</p>
          </div>

          {/* Section 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Kết nối với chúng tôi
            </h4>
            <div className="flex flex-col space-y-3 items-start">
              <a
                href="https://www.facebook.com/profile.php?id=61577012275973"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/23st.homestay/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@23st.homestay"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2025 23st.homestay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
