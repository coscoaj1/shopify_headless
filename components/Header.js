import React from "react";
import { BeakerIcon, SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="max-w-7xl flex mx-auto border-b border-gray-300 p-4">
      <BeakerIcon className="h-10 w-10 text-purple-700 mr-auto" />
      <SearchIcon className="h-8 w-8 text-gray-600" />
    </div>
  );
}
