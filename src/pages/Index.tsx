import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import ImageGrid from "@/components/ImageGrid";
import LoadingSpinner from "@/components/LoadingSpinner";

// Mock data for demonstration
const mockImages = [
  {
    id: "1",
    url: "https://source.unsplash.com/random/800x800?ai=1",
    title: "AI Generated Art 1",
  },
  {
    id: "2",
    url: "https://source.unsplash.com/random/800x800?future=1",
    title: "AI Generated Art 2",
  },
  {
    id: "3",
    url: "https://source.unsplash.com/random/800x800?tech=1",
    title: "AI Generated Art 3",
  },
  {
    id: "4",
    url: "https://source.unsplash.com/random/800x800?digital=1",
    title: "AI Generated Art 4",
  },
];

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(mockImages);

  const handleSearch = async (query: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            AI Image Search
          </h1>
          <p className="text-gray-400 text-lg mb-8 animate-fade-in">
            Search through millions of AI-generated images
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <ImageGrid images={images} />
        )}
      </div>
    </div>
  );
};

export default Index;