export async function GET() {
  const homeStays = [
    {
      id: 1,
      name: "23st.Studio Tân Phú Phòng 1",
      address: "Quận Tân Phú, TP. HCM",
      district: "Quận Tân Phú",
      image: "/images/hsTanPhuP1.jpg", // Đảm bảo ảnh này tồn tại trong public folder
      images: [
        "/images/hsTanPhu1P1.jpg",
        "/images/hsTanPhu2P1.jpg",
        "/images/hsTanPhu3P1.jpg",
        "/images/hsTanPhu4P1.jpg",
        "/images/hsTanPhu5P1.jpg",
        "/images/hsTanPhu6P1.jpg",
      ],
      description: "Mô tả chi tiết cho homestay Bình Thạnh.",
    },
    {
      id: 1,
      name: "23st.Studio Tân Phú Phòng 2",
      address: "Quận Tân Phú, TP. HCM",
      district: "Quận Tân Phú",
      image: "/images/hsTanPhuP2.jpg", // Đảm bảo ảnh này tồn tại trong public folder
      images: [
        "/images/hsTanPhu1P2.jpg",
        "/images/hsTanPhu2P2.jpg",
        "/images/hsTanPhu3P2.jpg",
        "/images/hsTanPhu4P2.jpg",
        "/images/hsTanPhu5P2.jpg",
        "/images/hsTanPhu6P2.jpg",
        "/images/hsTanPhu7P2.jpg",
      ],
      description: "Mô tả chi tiết cho homestay Bình Thạnh.",
    },
  ];

  return new Response(JSON.stringify(homeStays), {
    headers: { "Content-Type": "application/json" },
  });
}
