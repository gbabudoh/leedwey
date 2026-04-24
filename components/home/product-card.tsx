import { Heart, ShieldCheck, Star, Package, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: string;
  moq: string;
  supplier: string;
  rating?: number;
  years?: number;
  isVerified?: boolean;
}

export function ProductCard({ id, title, image, price, moq, supplier, rating, years, isVerified = true }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group block h-full">
      <div className="h-full glass-card !bg-white group rounded-[2.5rem] p-6 hover:translate-y-[-8px] transition-all duration-500 cursor-pointer border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
        <div className="relative aspect-[4/3] mb-6 bg-slate-50 rounded-[1.5rem] overflow-hidden group-hover:bg-indigo-50/50 transition-colors duration-500">
          {/* Image / Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-300">
            {image ? (
              <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            ) : (
              <div className="flex flex-col items-center gap-3">
                 <Package className="w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity" />
              </div>
            )}
          </div>
          
          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isVerified && (
               <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md shadow-sm border border-slate-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[10px] font-extrabold text-slate-900 uppercase tracking-widest">Verified Unit</span>
               </div>
            )}
            {years && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md shadow-sm border border-slate-800">
                <span className="text-[10px] font-extrabold text-white uppercase tracking-widest">{years} YRS</span>
              </div>
            )}
          </div>

          <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl text-slate-400 hover:text-red-500 hover:bg-white transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg border border-slate-100">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col space-y-4">
          <h3 className="text-lg font-extrabold text-slate-900 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          
          <div>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Unit Price From</p>
             <p className="text-xl font-extrabold text-slate-900 tracking-tight">{price}</p>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">MOQ: {moq}</span>
            </div>
            {rating && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">
                <Star className="w-3.5 h-3.5 fill-emerald-600" />
                <span className="text-xs font-bold">{rating}</span>
              </div>
            )}
          </div>

          <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-slate-500 truncate max-w-[140px] uppercase tracking-tighter">{supplier}</span>
            </div>
            <div className="flex items-center gap-1 text-indigo-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
               <span className="text-[10px] font-extrabold uppercase tracking-widest">Secure Node</span>
               <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
