import { notFound } from "next/navigation";
import Gallery from "./Gallery";
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
import FloatingButtons from "@/components/floatingButtons";
import Image from "next/image";

const amenitiesIcons = {
  "máy lạnh": <FaSnowflake />,
  "bồn tắm": <FaBath />,
  "view đẹp": <FaEye />,
  "máy chiếu": <FaVideo />,
  bếp: <FaUtensils />,
  "nước nóng lạnh": <FaHotTub />,
  "YouTube Premium": <FaYoutube />,
  Netflix: <FaFilm />,
};

async function getDestination(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/homeStays`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.find((item) => item.slug === slug);
}

export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;

  const destination = await getDestination(slug);

  if (!destination) return notFound();

  return (
    <section className="bg-[#fcf6ef] min-h-screen py-10 text-black">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 mt-25 md:pt-0">
        <div className="text-center mb-6 ">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2 md:pt-5">
            {destination.name}
          </h1>
          <p className="text-gray-600 font-sans">{destination.address}</p>
        </div>

        <Gallery destination={destination} />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2 font-sans">Mô tả</h2>
          <p className="text-gray-700 leading-relaxed font-sans">
            {destination.description}
          </p>
        </div>
        {destination.amenities && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 font-sans">Tiện nghi</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {destination.amenities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700 font-sans"
                >
                  <span className="text-xl">{amenitiesIcons[item]}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {destination.price && (
          <div className="my-10">
            <h2 className="text-2xl font-semibold mb-4 font-sans">Bảng giá</h2>
            <div className="w-full flex justify-center">
              <Image
                src={destination.price}
                alt={`Bảng giá - ${destination.name}`}
                width={800}
                height={600}
                className="rounded-lg shadow-md w-auto h-auto"
              />
            </div>
          </div>
        )}
      </div>
      <FloatingButtons />
    </section>
  );
}
