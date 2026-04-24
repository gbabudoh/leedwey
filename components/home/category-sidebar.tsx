import { 
  Menu, 
  Smartphone, 
  Cpu, 
  Shirt, 
  Home, 
  Zap, 
  Activity, 
  Car, 
  Construction, 
  Gem,
  Baby,
  Briefcase
} from "lucide-react";

const categories = [
  { name: "Consumer Electronics", icon: Smartphone },
  { name: "Apparel & Accessories", icon: Shirt },
  { name: "Home & Garden", icon: Home },
  { name: "Vehicles & Accessories", icon: Car },
  { name: "Sports & Entertainment", icon: Activity },
  { name: "Machinery", icon: Construction },
  { name: "Beauty & Personal Care", icon: Gem },
  { name: "Mother, Kids & Toys", icon: Baby },
  { name: "Business Services", icon: Briefcase },
  { name: "Electrical Equipment", icon: Zap },
  { name: "Industrial Machinery", icon: Cpu },
];

export function CategorySidebar() {
  return (
    <div className="w-64 bg-white border-r border-[#EDF0F3] h-[400px] flex flex-col py-2 shadow-sm rounded-l-lg z-10 relative">
      <div className="flex items-center gap-2 px-4 py-3 font-bold text-gray-800 border-b border-[#EDF0F3] mb-2">
        <Menu className="w-4 h-4" />
        <span>Categories</span>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {categories.map((category) => (
          <div 
            key={category.name}
            className="group flex items-center justify-between px-4 py-2 hover:bg-[#FFF0E6] cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-[--color-primary] group-hover:font-medium">
              <category.icon className="w-4 h-4" />
              <span className="truncate">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Category Expansion Panel Placeholder */}
      <div className="hidden group-hover:block absolute left-full top-0 w-[600px] h-full bg-white shadow-lg border border-[#EDF0F3] z-50 p-6">
          <h3 className="font-bold text-lg mb-4">Subcategories</h3>
          {/* This would be populated dynamically */}
      </div>
    </div>
  );
}
