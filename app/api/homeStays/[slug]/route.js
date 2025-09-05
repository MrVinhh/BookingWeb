import { NextResponse } from "next/server";
import homeStaysData from "@/data/homeStay.json";

// Khai báo một biến bên ngoài hàm để lưu trữ dữ liệu đã được tìm kiếm
// Điều này giúp tránh việc tìm kiếm lặp lại trên mỗi request

export async function GET(request) {
  const url = new URL(request.url);
  const slug = url.pathname.split("/").pop();

  const homeStay = homeStaysData.find((item) => item.slug === slug);

  if (homeStay) {
    return NextResponse.json(homeStay);
  } else {
    return NextResponse.json({ error: "Homestay not found" }, { status: 404 });
  }
}
