"use client"; 
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import NavBar from "../../components/NavBar";
import DashboardTitle from "@/components/DashboardTitle"; // Adjust this import if necessary
import SearchBar from "@/components/SearchBar"; 
import Postcard from "@/components/Postcard"; 
import { mushrooms } from "../../data/development"; 

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    tags: [],
    regions: [],
    categories: [],
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const tagsParam = searchParams.get("tags");
    const regionsParam = searchParams.get("regions");
    const categoriesParam = searchParams.get("categories");
    const tags = tagsParam ? JSON.parse(tagsParam) : [];
    const regions = regionsParam ? JSON.parse(regionsParam) : [];
    const categories = categoriesParam ? JSON.parse(categoriesParam) : [];
    setActiveFilters({
      tags,
      regions,
      categories,
    });
  }, [searchParams]);

  const handleSearch = (query) => {
    setSearchTerm(query.toLowerCase());
  };

  const matchesFilters = (mushroom) => {
    const { tags, regions, categories } = activeFilters;
    if (tags.length > 0 && !tags.some((tag) => mushroom.tags.includes(tag))) {
      return false;
    }
    if (regions.length > 0 && !regions.some((region) => mushroom.regions.includes(region))) {
      return false;
    }
    if (categories.length > 0 && !categories.some((cat) => mushroom.categories.includes(cat))) {
      return false;
    }
    return true;
  };

  const filteredMushrooms = mushrooms.filter((mushroom) => {
    const matchesSearch = mushroom.name.toLowerCase().includes(searchTerm);
    const passesFilters = matchesFilters(mushroom);
    return matchesSearch && passesFilters;
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Dashboard Header */}
      <DashboardTitle />

      {/* Combined Search & Collection */}
      <div className="w-[90%] bg-white p-6 rounded-lg shadow-md mt-4">
        {/* Search Bar */}
        <div className="mb-4">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Collection Section */}
        <h1 className="text-[#203B5F] text-3xl font-bold mb-4">My Collection</h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {filteredMushrooms.length === 0 ? (
            <p className="text-gray-500">No mushrooms found.</p>
          ) : (
            filteredMushrooms.map((mushroom) => (
              <Postcard
                key={mushroom.id}
                image={mushroom.image}
                name={mushroom.name}
                confidence={mushroom.confidence}
              />
            ))
          )}
        </div>
      </div>

      {/* Bottom Navbar */}
      <NavBar />
    </div>
  );
}
