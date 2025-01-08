import { Search } from "lucide-react";
import { useState } from "react";
import ImageCard from "@/components/ImageCard";
import BottomNavigation from "@/components/BottomNavigation";
import { Input } from "@/components/ui/input";

const Wardrobe = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const wardrobeItems = [
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Summer Collection",
      price: "$129.99"
    },
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      title: "Casual Wear",
      price: "$89.99"
    },
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      title: "Winter Essentials",
      price: "$149.99"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">My Wardrobe</h1>
        
        <div className="relative mb-8">
          <Input
            type="text"
            placeholder="Search your wardrobe..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 bg-white/50 backdrop-blur-md border-none"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-semibold mb-4">Recently Added</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wardrobeItems.map((item, index) => (
                <ImageCard
                  key={index}
                  url={item.url}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">Favorites</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wardrobeItems.slice(0, 2).map((item, index) => (
                <ImageCard
                  key={index}
                  url={item.url}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Wardrobe;