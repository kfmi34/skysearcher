import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Sparkles, Shirt, Crown, Star } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "New Arrivals",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Trending",
    icon: Crown,
  },
  {
    id: 3,
    title: "Most Popular",
    icon: Star,
  },
  {
    id: 4,
    title: "Editor's Pick",
    icon: Shirt,
  }
];

const TrendingCategories = () => {
  return (
    <div className="w-full py-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((category) => (
            <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
              <Card className="p-4 bg-white/50 backdrop-blur-sm border-none hover:bg-white/60 transition-colors cursor-pointer">
                <div className="flex flex-col items-center space-y-2">
                  <category.icon className="w-6 h-6 text-accent" />
                  <span className="text-sm font-medium text-foreground">{category.title}</span>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TrendingCategories;