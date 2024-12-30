import { Link } from "react-router-dom";

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

const ImageGrid = () => {
  return (
    <div className="px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">STYLE BY CATEGORY</h2>
      <div className="grid grid-cols-2 gap-4">
        {fashionCategories.map((category) => (
          <Link key={category.id} to={category.path}>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={category.url}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-lg font-semibold">{category.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;