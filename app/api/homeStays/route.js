import { NextResponse } from "next/server";
import homeStaysData from "@/data/homeStay.json";

export async function GET() {
  return NextResponse.json(homeStaysData);
}
