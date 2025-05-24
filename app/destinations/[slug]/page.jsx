import { notFound } from "next/navigation";
import Gallery from "./Gallery";

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
    <section className="bg-gray-100 min-h-screen py-10 text-black">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {destination.name}
        </h1>
        <p className="text-gray-600 mb-6">{destination.address}</p>

        <Gallery destination={destination} />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Mô tả</h2>
          <p className="text-gray-700 leading-relaxed">
            {destination.description}
          </p>
        </div>
      </div>
    </section>
  );
}
