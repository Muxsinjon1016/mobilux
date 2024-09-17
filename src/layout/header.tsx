"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/sections/search";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="container py-4 md:py-6 flex items-center justify-between gap-5">
        <Image
          className="w-[100px] cursor-pointer lg:w-[116px]"
          width={100}
          height={28}
          src="/logo.svg"
          alt="logo"
        />
        <div className="flex items-center gap-3 lg:gap-6">
          <Search />
          <div className="flex items-center gap-5">
            <div>
              <Select>
                <SelectTrigger className="w-[78px]">
                  <SelectValue placeholder="Lang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uzbek">UZB</SelectItem>
                  <SelectItem value="english">ENG</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <FaRegBell className="w-6 hidden lg:block h-auto" />
            <Button
              className="font-semibold hidden lg:block text-xl"
              variant={"ghost"}
            >
              Kirish
            </Button>
            <FaCircleUser className="w-6 hidden lg:block h-auto" />
          </div>
          <FaSearch className="w-6 h-auto lg:hidden" />
        </div>
      </div>
    </>
  );
};

export default Header;
