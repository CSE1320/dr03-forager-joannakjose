"use client";
import React from "react";
import Filter from "../../components/Filter";

const FilterPage = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Filter Options</h1>
      <Filter />
    </div>
  );
};

export default FilterPage;
