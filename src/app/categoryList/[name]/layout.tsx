"use client";

import Category from "@/components/sections/category";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CatalogListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="flex">
      <Button className="fixed top-20 right-20" onClick={() => router.back()}>
        Back
      </Button>
      <div className="w-[280px] hidden lg:block bg-white h-screen ">
        <div className="lg:ml-[20px]">
          <Category />
        </div>
      </div>
      <div className="lg:ml-[40px]">{children}</div>
    </div>
  );
}
