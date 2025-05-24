import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata = {
  title: "Về chúng tôi - Homestay",
  description: "Tìm hiểu thêm về Homestay của chúng tôi.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md py-20 px-6 md:px-20">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
            Về Chúng Tôi
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Chào mừng bạn đến với hệ thống homestay hiện đại và ấm cúng nhất
            Việt Nam! Chúng tôi mang đến trải nghiệm sống, nghỉ dưỡng như tại
            nhà với không gian xanh, dịch vụ chuyên nghiệp và sự yên bình hiếm
            có.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-yellow-500">
              Tầm nhìn & Sứ mệnh
            </h2>
            <p>
              Chúng tôi hướng tới việc tạo ra những không gian sống xanh, tiện
              nghi và kết nối cộng đồng. Mỗi căn homestay là một tác phẩm nghệ
              thuật hài hòa giữa thiên nhiên và hiện đại.
            </p>
            <p>
              Sứ mệnh của chúng tôi là mang lại cảm giác "home away from home"
              cho mỗi vị khách, dù bạn là người đi công tác, du lịch hay chỉ đơn
              giản muốn nghỉ ngơi.
            </p>
          </div>
          <Image
            src="/images/about-vision.jpg"
            alt="Vision and Mission"
            width={600}
            height={400}
            className="rounded-xl shadow-xl object-cover"
          />
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/about-community.jpg"
            alt="Cộng đồng homestay"
            width={600}
            height={400}
            className="rounded-xl shadow-xl object-cover"
          />
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-yellow-500">
              Không gian & Cộng đồng
            </h2>
            <p>
              Với thiết kế mở, gần gũi thiên nhiên, các căn homestay đều có ban
              công rộng, cây xanh và ánh sáng tự nhiên. Khu vực sinh hoạt chung
              được bố trí ấm cúng giúp kết nối cư dân.
            </p>
            <p>
              Chúng tôi thường xuyên tổ chức các sự kiện như tiệc BBQ, workshop
              nghệ thuật, lớp yoga... để bạn vừa thư giãn vừa gặp gỡ bạn bè mới.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
