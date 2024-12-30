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
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary pb-20">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-fade-in">
            Fashion AI
          </h1>
          <p className="text-gray-400 text-sm mb-4 animate-fade-in">
            Discover your perfect style with AI
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <TrendingCategories />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4 px-4">
            Featured Collection
          </h2>
          {loading ? <LoadingSpinner /> : <ImageGrid />}
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;