import { Home, Search, User, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: ShoppingBag, label: "Shop", path: "/shop" },
    { icon: Sparkles, label: "AI", path: "/ai" },
    { icon: Search, label: "Wardrobe", path: "/wardrobe" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/10">
      <nav className="flex justify-around items-center p-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex flex-col items-center space-y-1 text-white/70 hover:text-white transition-colors"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default BottomNavigation;