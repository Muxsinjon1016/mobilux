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
    <div className="container mx-auto">
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
          className="relative "
        >
          <CarouselContent className="flex">
            {data?.map((banner) => (
              <CarouselItem key={banner.id} className="h-auto lg:w-[1200px]">
                <img
                  src={banner.img}
                  alt="banner image"
                  className="rounded-12 lg:w-[1086px] ml-auto overflow-hidden h-auto object-cover"
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
