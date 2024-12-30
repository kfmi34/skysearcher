import { Search, Camera } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <div className="flex items-center px-4 py-3 bg-white rounded-full shadow-sm border border-gray-100">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask your personal stylist"
            className="w-full px-4 py-1 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400"
          />
          <Camera className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;