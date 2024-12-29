import { Search } from "lucide-react";
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
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border border-white/10 shadow-lg">
          <div className="flex items-center px-4 py-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for any image..."
              className="w-full px-4 py-2 bg-transparent border-none focus:outline-none text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;