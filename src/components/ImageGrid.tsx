import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import ImageCard from "./ImageCard";

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

const shoppingItems = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
    title: "Summer Dress",
    price: "$89.99"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1562157873-818bc0726f68",
    title: "Casual Shirt",
    price: "$49.99"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
    title: "Denim Jacket",
    price: "$129.99"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956",
    title: "Winter Coat",
    price: "$199.99"
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed",
    title: "Evening Gown",
    price: "$299.99"
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1566206091558-7f218b696731",
    title: "Summer Collection",
    price: "$159.99"
  }
];

const CategoryCarousel = ({ items, title }: { items: typeof fashionCategories, title: string }) => {
  return (
    <div className="w-full py-2">
      <h2 className="text-lg font-semibold text-foreground mb-2 px-4">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
              <Card className="relative overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <h3 className="text-white text-sm font-medium">{item.title}</h3>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const ShoppingSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
      {shoppingItems.map((item) => (
        <ImageCard
          key={item.id}
          url={item.url}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

const ImageGrid = () => {
  return (
    <div className="space-y-6">
      <CategoryCarousel items={fashionCategories} title="STYLE BY CATEGORY" />
      <CategoryCarousel items={occasions} title="STYLE BY OCCASION" />
      <div className="py-2">
        <h2 className="text-lg font-semibold text-foreground mb-4 px-4">FEATURED ITEMS</h2>
        <ShoppingSection />
      </div>
    </div>
  );
};

export default ImageGrid;