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
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        <div className="max-w-max px-6 text-center mx-auto md:text-left md:mx-4">
          <h2 className="text-3xl md:text-5xl font-bold font-inter mb-4">
            23 Homestay - Where rest feels like returning
          </h2>
          <p className="text-base italic font-inter text-gray-600 mx-auto max-w-max md:text-left md:mx-2">
            {isVietnamese
              ? "23homestay không chỉ là một nơi để ở — mà là một không gian sống hiện đại, tiện nghi và đầy cảm hứng dành cho những người trẻ yêu thích sự tự do và kết nối. Mỗi căn phòng mang một màu sắc riêng, giúp bạn dễ dàng “chill”, làm việc hay đơn giản là tận hưởng khoảng trời riêng của mình."
              : "23homestay isn't just a place to stay — it's a modern, comfortable, and inspiring space for young people who value freedom and connection. Each room has its own character, perfect for chilling, working, or simply enjoying your own space."}
          </p>
        </div>
        <div className="text-center my-10">
          <h1 className="text-3xl md:text-4xl font-inter font-bold mb-2">
            {name}
          </h1>
          <p className="text-gray-600 font-inter">{address}</p>
        </div>

        <Gallery destination={destination} />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2 font-inter">
            {isVietnamese ? "Mô tả" : "Description"}
          </h2>
          <p className="text-gray-700 leading-relaxed font-inter">
            {description}
          </p>
        </div>

        {amenities && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 font-inter">
              {isVietnamese ? "Tiện nghi" : "Amenities"}
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {amenities.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-gray-700 font-inter"
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
            <h2 className="text-2xl font-semibold mb-4 font-inter">
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
            <h3 className="text-2xl font-semibold mb-4 font-inter">
              {isVietnamese ? "Lịch Trống Phòng" : "Availability Calendar"}
            </h3>
            <p className="text-l font-semibold mb-4 font-inter">
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
