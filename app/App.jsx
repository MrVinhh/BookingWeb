"use client";

import React from "react";
import ImageSlider from "@/components/ImageSlider";
import BookingSection from "@/app/Booking/Booking";
import CollectionImage from "./collection/collection";
import DestinationSection from "./destinations/Destination";
import FloatingButtons from "@/components/floatingButtons";

export default function App({ homeStays }) {
  return (
    <div className="font-lora text-gray-800 bg-white scroll-smooth">
      <div className="relative">
        <ImageSlider data={homeStays} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4">
          <BookingSection overlay />
        </div>
      </div>

      <CollectionImage />
      <DestinationSection data={homeStays} />
      <FloatingButtons />
    </div>
  );
}
