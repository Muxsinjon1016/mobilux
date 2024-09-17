

import Category from "@/components/sections/category";

export default function CatalogListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
    <div className="flex">
      
      <div className="w-[280px] hidden lg:block bg-white h-screen ">
        <div className="lg:ml-[20px]">
          <Category />
        </div>
      </div>
      <div className="lg:ml-[40px]">{children}</div>
    </div>
  );
}
