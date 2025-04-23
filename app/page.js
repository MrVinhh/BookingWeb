"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import BookingSection from "@/components/Booking";
import DiscoverSection from "@/components/Discover";
import DestinationSection from "@/components/Destination";
import Footer from "@/components/Footer";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  <script
    src={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`}
    async
    defer
  ></script>;
  return (
    <div className="font-sans text-gray-800 bg-white scroll-smooth">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="relative">
        <ImageSlider />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4">
          <BookingSection overlay />
        </div>
      </div>
      <DiscoverSection />
      <DestinationSection />
      <Footer />
    </div>
  );
}
