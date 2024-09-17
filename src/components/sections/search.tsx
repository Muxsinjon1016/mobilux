"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { MdOutlineTune } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "@/hooks/useDebaunce";
import { getSearch } from "@/services/query/getSearch";
import { productTypes } from "@/services/types/productTypes";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<productTypes[]>([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      try {
        const searchResults = await getSearch(value);
        setResults(searchResults);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  const handleSearch = async () => {
    if (debouncedSearchTerm) {
      try {
        const searchResults = await getSearch(debouncedSearchTerm);
        setResults(searchResults);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      }
    }
  };

  return (
    <div className="relative">
      <div className="rounded-[5px] hidden lg:block overflow-hidden border-2 bg-[#f7f7f7] border-primaryColor">
        <div className="flex items-center gap-4">
          <FaSearch className="w-6 h-auto ml-2" />
          <Input
            className="w-[445px] xl:w-[745px]"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Trigger search on 'Enter' key
          />
          <Button
            className="flex items-center gap-2 rounded-none"
            variant="default"
            onClick={handleSearch}
          >
            <MdOutlineTune className="w-6 h-auto" />
            Filter
          </Button>
        </div>
        {results.length > 0 && (
          <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul>
              {results.map((result) => (
                <li
                  key={result.id}
                  className="p-2 border-b border-gray-200 hover:bg-gray-100"
                >
                  {result.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
