import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import ImageGrid from "@/components/ImageGrid";
import LoadingSpinner from "@/components/LoadingSpinner";
import TrendingCategories from "@/components/TrendingCategories";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto pt-6 pb-20">
        <SearchBar onSearch={handleSearch} />
        <TrendingCategories />
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="mt-6">
              <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
                  alt="Fashion banner"
                  className="w-full h-full object-cover"
                />
              </div>
              <ImageGrid />
            </div>
          </>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;