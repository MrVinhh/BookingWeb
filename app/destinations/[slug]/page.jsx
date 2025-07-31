"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FloatingButtons from "@/components/floatingButtons";
import Gallery from "./Gallery";
import Image from "next/image";
import {
  FaSnowflake,
  FaBath,
  FaEye,
  FaVideo,
  FaUtensils,
  FaHotTub,
  FaYoutube,
  FaFilm,
} from "react-icons/fa";

const icons = {
  "máy lạnh": <FaSnowflake />,
  "bồn tắm": <FaBath />,
  "view đẹp": <FaEye />,
  "máy chiếu": <FaVideo />,
  bếp: <FaUtensils />,
  "nước nóng lạnh": <FaHotTub />,
  "YouTube Premium": <FaYoutube />,
  Netflix: <FaFilm />,
  "Air conditioner": <FaSnowflake />,
  Bathtub: <FaBath />,
  "Nice view": <FaEye />,
  Projector: <FaVideo />,
  Kitchen: <FaUtensils />,
  "Hot & cold water": <FaHotTub />,
};

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [isVietnamese, setIsVietnamese] = useState(true);

  useEffect(() => {
    setIsVietnamese((navigator.language || "").startsWith("vi"));

    const stored = localStorage.getItem("selectedDestination");
    if (stored) {
      const parsed = JSON.parse(stored);
      const slugify = (text) =>
        text
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "")
          .replace(/\-\-+/g, "-")
          .replace(/^-+|-+$/g, "");

      if (slugify(parsed.name) === slug) {
        setDestination(parsed);
        return;
      }
    }

    fetch(`/api/homeStays/${slug}`)
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, [slug]);

  if (!destination) return <p className="p-10">Loading...</p>;

  const name = destination.name;
  const address = isVietnamese ? destination.address : destination.addressEn;
  const description = isVietnamese
    ? destination.description
    : destination.descriptionEn;
  const amenities = isVietnamese
    ? destination.amenities
    : destination.amenitiesEn;

  return (
    <section className="bg-[#fcf6ef] min-h-screen py-20 text-black">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
            {name}
          </h1>
          <p className="text-gray-600 font-sans">{address}</p>
        </div>

        <Gallery destination={destination} />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2 font-sans">
            {isVietnamese ? "Mô tả" : "Description"}
          </h2>
          <p className="text-gray-700 leading-relaxed font-sans">
            {description}
          </p>
        </div>

        {amenities && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 font-sans">
              {isVietnamese ? "Tiện nghi" : "Amenities"}
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {amenities.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-gray-700 font-sans"
                >
                  <span className="text-xl">{icons[item]}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {destination.price && (
          <div className="my-10">
            <h2 className="text-2xl font-semibold mb-4 font-sans">
              {isVietnamese ? "Bảng giá" : "Pricing"}
            </h2>
            <div className="w-full flex justify-center">
              <Image
                src={destination.price}
                alt={`Bảng giá - ${name}`}
                width={800}
                height={600}
                className="rounded-lg shadow-md w-auto h-auto"
              />
            </div>
          </div>
        )}

        {destination.calendarEmbedUrl?.trim() && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4 font-sans">
              {isVietnamese ? "Lịch Trống Phòng" : "Availability Calendar"}
            </h3>
            <p className="text-l font-semibold mb-4 font-sans">
              {isVietnamese
                ? "(Lịch chỉ là tham khảo liên hệ chúng tôi để biết thông tin mới nhất.)"
                : "(The schedule is for reference only, contact us for the latest information.)"}
            </p>
            <iframe
              src={destination.calendarEmbedUrl}
              width="100%"
              height="600"
              style={{ border: 0 }}
              title={`Lịch trống phòng của ${name}`}
              loading="lazy"
              allowFullScreen
            />
          </div>
        )}
      </div>
      <FloatingButtons />
    </section>
  );
}
