import App from "./App";

export default async function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/homeStays`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch homeStays");
  }

  const homeStays = await res.json();

  return <App homeStays={homeStays} />;
}
