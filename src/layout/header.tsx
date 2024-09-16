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
import { Input } from "@/components/ui/input";
import { MdOutlineTune } from "react-icons/md";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <>
      <div className="container py-4 md:py-6 flex items-center justify-between gap-5">
        <img
          className="w-[100px] cursor-pointer lg:w-[116px]"
          src="logo.svg"
          alt="logo"
        />
        <div className="flex items-center gap-3 lg:gap-6">
          <div className="rounded-[5px] hidden lg:block overflow-hidden border-2 bg-[#f7f7f7]  border-primaryColor">
            <div className="flex items-center gap-4">
              <FaSearch className="w-6 h-auto ml-2" />
              <Input
                className="w-[445px] xl:w-[745px]"
                type="text"
                placeholder="Qidirish"
              />
              <Button
                className="flex items-center gap-2 rounded-none"
                variant="default"
              >
                <MdOutlineTune className="w-6 h-auto" />
                Filter
              </Button>
            </div>
          </div>
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
