"use client";

import React from "react";
import ImageSlider from "@/components/ImageSlider";
import DestinationSection from "./destinations/Destination";
import FloatingButtons from "@/components/floatingButtons";

export default function App({ homeStays }) {
  return (
    <div className="font-lora text-gray-800 bg-[#fcf6ef] scroll-smooth md:p-20">
      <ImageSlider data={homeStays} />
      {/* <CollectionImage /> */}
      <DestinationSection data={homeStays} />
      <FloatingButtons />
    </div>
  );
}
