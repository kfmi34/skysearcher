import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import ImageGrid from "@/components/ImageGrid";
import LoadingSpinner from "@/components/LoadingSpinner";
import TrendingCategories from "@/components/TrendingCategories";
import BottomNavigation from "@/components/BottomNavigation";
import { Sparkles } from "lucide-react";

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
      <div className="container mx-auto pt-8 pb-20">
        <div className="flex items-center mb-8 px-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-xl font-semibold text-foreground">Fashion AI</span>
          </div>
        </div>

        <div className="px-4 mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <TrendingCategories />
            <ImageGrid />
          </>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;