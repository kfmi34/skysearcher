import { Card } from "@/components/ui/card";
import { Sparkles, Shirt, Crown, Star } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "New Arrivals",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
  {
    id: 2,
    title: "Trending",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },
  {
    id: 3,
    title: "Most Popular",
    icon: Star,
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc",
  },
  {
    id: 4,
    title: "Editor's Pick",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908",
  }
];

const TrendingCategories = () => {
  return (
    <div className="w-full py-4 px-4">
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="relative overflow-hidden rounded-xl aspect-[16/9]">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <category.icon className="w-8 h-8 mb-2" />
              <span className="text-lg font-medium">{category.title}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingCategories;