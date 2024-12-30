import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Pairing",
    path: "/pairing",
  },
  {
    id: 2,
    title: "Outfits",
    path: "/outfits",
  },
  {
    id: 3,
    title: "Fit Check",
    path: "/fit-check",
  }
];

const TrendingCategories = () => {
  return (
    <div className="w-full py-4">
      <div className="flex justify-around items-center px-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className="flex flex-col items-center space-y-2 text-gray-600 hover:text-accent transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-accent">{category.title[0]}</span>
            </div>
            <span className="text-sm">{category.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingCategories;