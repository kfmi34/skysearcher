import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Trending",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    path: "/trending",
  },
  {
    id: 2,
    title: "Winter",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    path: "/winter",
  },
  {
    id: 3,
    title: "New Year Fits",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    path: "/new-year",
  },
  {
    id: 4,
    title: "Party Wear",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    path: "/party",
  },
];

const TrendingCategories = () => {
  return (
    <div className="w-full py-8">
      <h2 className="text-2xl font-semibold text-white mb-6 px-4">Discover</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {categories.map((category) => (
            <CarouselItem key={category.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Link to={category.path}>
                <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default TrendingCategories;