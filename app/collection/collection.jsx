"use client";
import Image from "next/image";
import hsTanPhu4P3 from "@/public/images/hsTanPhu4P3.jpg";
import hsTanPhu7P1 from "@/public/images/hsTanPhu7P1.jpg";
import hsToHienThanh1P1 from "@/public/images/hsToHienThanh1P1.jpg";
import dark1 from "@/public/images/dark1.jpg";
import dark13 from "@/public/images/dark13.jpg";
import hsBinhThanhXVNT3P1 from "@/public/images/hsBinhThanhXVNT3P1.jpg";
import hsToHienThanh2P2 from "@/public/images/hsToHienThanh2P2.jpg";
import nude11 from "@/public/images/nude11.jpg";
import { useEffect, useState } from "react";

const collectionImage = () => {
  const [isVietnamese, setIsVietnamese] = useState(true);
  useEffect(() => {
    setIsVietnamese((navigator.language || "").startsWith("vi"));
  }, []);
  return (
    <section className="py-30 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold font-playfair mb-20">
          {isVietnamese ? "Bộ sưu tập 23homestay" : "23homestay Collection"}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto grid-auto-rows-min grid-flow-row-dense">
          <div className="rounded-xl shadow-lg overflow-hidden relative pb-[100%]">
            <Image
              src={hsToHienThanh1P1}
              alt="Phòng ngủ homestay"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            />
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden relative pb-[100%]">
            <Image
              src={dark13}
              alt="Thiết kế phòng ngủ hiện đại"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            />
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden relative pb-[150%] row-span-2">
            <Image
              src={hsTanPhu7P1}
              alt="Không gian phòng khách homestay"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            />
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden relative pb-[150%] row-span-2">
            <Image
              src={hsToHienThanh2P2}
              alt="Phòng ngủ với view thành phố"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            />
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden relative pb-[100%]">
            <Image
              src={dark1}
              alt="Khu vực tiệc ngoài trời homestay"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            />
          </div>

          <div className="rounded-xl shadow-lg overflow-hidden relative pb-[100%]">
            <Image
              src={hsTanPhu4P3}
              alt="Khu vực bàn ghế thư giãn homestay"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            />
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden relative pb-[100%]">
            <Image
              src={nude11}
              alt="Khu vực bàn ghế thư giãn homestay"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            />
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden relative pb-[100%] lg:hidden">
            <Image
              src={hsBinhThanhXVNT3P1}
              alt="Khu vực bàn ghế thư giãn homestay"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default collectionImage;
