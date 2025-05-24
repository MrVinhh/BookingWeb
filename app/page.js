"use client";

import React, { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";
import BookingSection from "@/app/Booking/Booking";
import DiscoverSection from "@/app/Discover/Discover";
import DestinationSection from "./destinations/Destination";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white scroll-smooth">
      <div className="relative">
        <a
          href="tel:0347996017" // thay số của bạn tại đây
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          <PhoneCall className="w-5 h-5" />
          <span className="hidden md:inline">Hotline</span>
        </a>
        <ImageSlider />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4">
          <BookingSection overlay />
        </div>
      </div>
      <DiscoverSection />
      <DestinationSection />
    </div>
  );
}
