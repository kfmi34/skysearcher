import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const fashionCategories = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    title: "Dresses",
    path: "/category/dresses"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1604335398480-e944c5c5ac89",
    title: "Tops",
    path: "/category/tops"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
    title: "Trousers",
    path: "/category/trousers"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
    title: "Skirts",
    path: "/category/skirts"
  }
];

const occasions = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "Casual",
    path: "/occasion/casual"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1507555368205-c1bf43a86931",
    title: "Formal",
    path: "/occasion/formal"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1490725263030-1f0521cec8ec",
    title: "Party",
    path: "/occasion/party"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    title: "Wedding",
    path: "/occasion/wedding"
  }
];

const CategoryCarousel = ({ items, title }: { items: typeof fashionCategories, title: string }) => {
  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-semibold text-foreground mb-4 px-4">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-2/3 md:basis-1/3">
              <Card className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const ImageGrid = () => {
  return (
    <div className="space-y-8">
      <CategoryCarousel items={fashionCategories} title="STYLE BY CATEGORY" />
      <CategoryCarousel items={occasions} title="STYLE BY OCCASION" />
    </div>
  );
};

export default ImageGrid;