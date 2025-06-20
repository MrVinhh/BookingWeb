"use client";

import React, { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";
import ImageSlider from "@/components/ImageSlider";
import BookingSection from "@/app/Booking/Booking";
import DiscoverSection from "@/app/Discover/Discover";
import DestinationSection from "./destinations/Destination";
import FloatingButtons from "@/components/floatingButtons";

export default function App() {
  return (
    <div className="font-lora text-gray-800 bg-white scroll-smooth">
      <div className="relative">
        <ImageSlider />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4">
          <BookingSection overlay />
        </div>
      </div>
      <DiscoverSection />
      <DestinationSection />
      <FloatingButtons />
    </div>
  );
}
