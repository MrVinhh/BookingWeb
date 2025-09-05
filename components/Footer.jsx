"use client";

import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const [isVietnamese, setIsVietnamese] = useState(true);

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsVietnamese(lang.startsWith("vi"));
  }, []);

  return (
    <footer className="bg-black text-white py-8 text-lg" id="footer">
      <div className="container mx-auto px-2 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4 uppercase">
              {isVietnamese ? "Về 23.homestay" : "About 23.homestay"}
            </h2>
            <p className="text-sm leading-relaxed text-justify">
              {isVietnamese ? (
                <>
                  23homestay không chỉ là một nơi để ở — mà là một không gian
                  sống hiện đại, tiện nghi và đầy cảm hứng dành cho những người
                  trẻ yêu thích sự tự do và kết nối. Mỗi căn phòng mang một màu
                  sắc riêng, giúp bạn dễ dàng “chill”, làm việc hay đơn giản là
                  tận hưởng khoảng trời riêng của mình.
                </>
              ) : (
                <>
                  23homestay isn&apos;t just a place to stay — it's a modern,
                  comfortable, and inspiring space for young people who value
                  freedom and connection. Each room has its own character,
                  perfect for chilling, working, or simply enjoying your own
                  space.
                </>
              )}
            </p>
          </div>

          <div className="md:pl-10">
            <h4 className="text-lg font-semibold mb-4 font-inter uppercase">
              {isVietnamese ? "Liên kết nhanh" : "Quick Links"}
            </h4>
            <ul className="space-y-2 font-inter text-justify text-sm">
              <li>
                <a href="/" className="hover:text-indigo-400">
                  {isVietnamese ? "Trang chủ" : "Home"}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-400">
                  {isVietnamese ? "Giới thiệu" : "About"}
                </a>
              </li>
            </ul>
          </div>

          <div className="font-inter">
            <h4 className="text-lg font-semibold mb-4 uppercase ">
              {isVietnamese ? "Liên hệ" : "Contact"}
            </h4>
            <div class="flex flex-row gap-1 justify-start">
              <div class="flex flex-col">
                <a class="text-sm">Email:</a>
                <a class="text-sm">SĐT:</a>
              </div>
              <div class="flex flex-col">
                <a class="text-sm">hello@23homestay.vn</a>
                <a class="text-sm">0909417817 | 0916430333</a>
              </div>
            </div>
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4 font-inter uppercase">
                {isVietnamese ? "Kết nối với chúng tôi" : "Connect with us"}
              </h4>
              <div className="flex flex-row gap-5 space-y-3 text-justify">
                <a
                  href="https://www.facebook.com/profile.php?id=61577012275973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2  text-white rounded-full hover:bg-blue-700 transition"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://www.instagram.com/23st.homestay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2  text-white rounded-full hover:bg-pink-600 transition"
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

          <div className="font-inter">
            <h4 className="text-lg font-semibold mb-4 uapercase">
              {isVietnamese
                ? "CHÍNH SÁCH BẢO MẬT và ĐIỀU KHOẢN DỊCH VỤ"
                : "PRIVACY POLICY and TERMS OF SERVICE"}
            </h4>
            <div className="flex gap-4 text-justify flex-col">
              <Link href="/TermAndPrivacyVi">
                <p className="text-sm font-semibold hover:text-indigo-400">
                  Chính sách (VI)
                </p>
              </Link>
              <Link href="/TermAndPrivacyEn">
                <p className="text-sm font-semibold hover:text-indigo-400">
                  Privacy Policy (EN)
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p className="font-inter">
            &copy; 2025 23Homestay.{" "}
            {isVietnamese ? "All rights reserved." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
