"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-3 py-1 rounded-full text-sm transition-colors ${
        isActive
          ? "bg-customGreen text-white"
          : "bg-gray-200 text-gray-500 hover:bg-gray-300"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Filter = () => {
  const [filters, setFilters] = useState({
    tags: [],
    regions: [],
    categories: [],
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tagsParam = searchParams.get("tags");
    const regionsParam = searchParams.get("regions");
    const categoriesParam = searchParams.get("categories");

    setFilters({
      tags: tagsParam ? JSON.parse(tagsParam) : [],
      regions: regionsParam ? JSON.parse(regionsParam) : [],
      categories: categoriesParam ? JSON.parse(categoriesParam) : [],
    });
  }, [searchParams]);

  const filterOptions = {
    tags: ["Favorites", "Recent"],
    regions: [
      "Texas", "North America", "South America", "Asia", "Europe", "Africa",
    ],
    categories: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"],
  };

  // Handle filter toggle
  const toggleFilter = (filterType, item) => {
    setFilters((prevFilters) => {
      const updatedFilters = [...prevFilters[filterType]];
      if (updatedFilters.includes(item)) {
        return {
          ...prevFilters,
          [filterType]: updatedFilters.filter((i) => i !== item),
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: [...updatedFilters, item],
        };
      }
    });
  };

  // Apply filters to URL
  const applyFilters = () => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((filterType) => {
      if (filters[filterType].length) {
        params.set(filterType, JSON.stringify(filters[filterType]));
      }
    });
    router.push(`/dashboard?${params.toString()}`);
  };

  return (
    <div className="w-64 p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">FILTER</h3>
        <button
          onClick={applyFilters}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      {/* Map through filters */}
      {Object.entries(filterOptions).map(([filterType, options]) => (
        <div key={filterType} className="mb-3">
          <h4 className="text-sm font-medium text-gray-700 mb-2">{filterType}</h4>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <FilterButton
                key={option}
                label={option}
                isActive={filters[filterType].includes(option)}
                onClick={() => toggleFilter(filterType, option)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
