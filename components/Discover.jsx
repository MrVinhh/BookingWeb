import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const features = [
  {
    title: "Chinh nhánh Bình Thạnh 1",
    description: "Trải nghiệm không gian yên tĩnh, xanh mát.",
    image: "/images/hsBinhThanh1.jpg",
  },
  {
    title: "Chi nhánh Bình Thạnh 2",
    description: "Đầy đủ nội thất hiện đại, tiện nghi cao cấp.",
    image: "/images/hsBinhThanh2.jpg",
  },
  {
    title: "Chinh nhánh Tân Phú 1",
    description: "Kết nối với những người trẻ năng động.",
    image: "/images/hsTanPhu.jpg",
  },
  {
    title: "Chinh nhánh Tân Phú 2",
    description: "Thuận tiện di chuyển, gần trung tâm thành phố.",
    image: "/images/hsTanPhu2.jpg",
  },
  {
    title: "Chinh nhánh Tô Hiến Thành 1",
    description: "Thuận tiện di chuyển, gần trung tâm thành phố.",
    image: "/images/hsToHienThanh1.jpg",
  },
  {
    title: "Chinh nhánh Tô Hiến Thành 2",
    description: "Hệ thống camera & bảo vệ 24/7.",
    image: "/images/hsToHienThanh2.jpg",
  },
  {
    title: "Chinh nhánh Xóm Chiếu 1",
    description: "Không gian lý tưởng cho làm việc & học tập.",
    image: "/images/hsXomChieu1.jpg",
  },
  {
    title: "Chinh nhánh Xóm Chiếu 2",
    description: "Không gian lý tưởng cho làm việc & học tập.",
    image: "/images/hsXomChieu1.jpg",
  },
];

const DiscoverSlider = () => {
  return (
    <section className="py-10 bg-white text-black">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Khám phá 23st.Studio</h2>
        <p className="text-gray-600 mt-2">
          Không gian sống hiện đại, đầy cảm hứng
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-yellow-50 w-full rounded-2xl p-4 shadow-md hover:shadow-xl transition flex flex-col justify-between min-h-[300px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default DiscoverSlider;
