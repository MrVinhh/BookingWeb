"use client";

import { PhoneCall } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [isVietnamese, setIsVietnamese] = useState(true);

  useEffect(() => {
    setIsVietnamese((navigator.language || "").startsWith("vi"));
  }, []);
  return (
    <>
      {/* Hotline */}
      <a
        href="tel:0909417817"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        <PhoneCall className="w-5 h-5" />
        <span className="hidden md:inline font-poppins">Hotline</span>
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/61577012275973"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FaFacebookMessenger className="w-5 h-5" />
        <span className="hidden md:inline font-poppins">
          {isVietnamese ? "Đặt phòng ngay" : "Booking"}
        </span>
      </a>
    </>
  );
}
