import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getBanners } from "@/services/query/getBanners";
// import Autoplay from "embla-carousel-autoplay";

export const Banner = async () => {
  const data = await getBanners();

  return (
    <div className="container flex items-center justify-end">
      <div>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          // plugins={[
          //   Autoplay({
          //     delay: 3000,
          //   }),
          // ]}
          className="relative max-w-[1000px] xl:max-w-[1100px]"
        >
          <CarouselContent className="flex">
            {data?.map((banner) => (
              <CarouselItem key={banner.id} className="h-auto ">
                <img
                  src={banner.img}
                  alt="banner image"
                  className="rounded-12 lg:max-w-[1086px] ml-auto overflow-hidden h-auto object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
