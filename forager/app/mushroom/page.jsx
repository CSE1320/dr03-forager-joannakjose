import Link from "next/link";
import NavBar from "../../components/NavBar";
import MushroomCard from "../../components/Postcard";

export default function MushroomPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Mushroom Page</h1>
      <MushroomCard />
      <Link href="/comparison">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Go to Mushroom Comparison Page
        </button>
      </Link>
      <NavBar />
    </div>
  );
}
