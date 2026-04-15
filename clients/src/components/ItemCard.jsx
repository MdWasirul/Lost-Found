import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Tag, ArrowRight } from "lucide-react";

const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  const isLost = item.type === "lost";

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      {/* Type Ribbon */}
      <div className={`h-2 w-full ${isLost ? "bg-red-500" : "bg-green-500"}`} />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
            isLost ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
          }`}>
            {item.type}
          </span>
          <span className="text-slate-400 text-[10px] font-bold">
            {new Date(item.createdAt).toLocaleDateString()}
          </span>
        </div>

        <h4 className="text-xl font-bold text-slate-800 mb-2 truncate group-hover:text-indigo-600 transition-colors">
          {item.title}
        </h4>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Tag size={14} className="text-indigo-500" />
            <span className="font-medium">{item.category}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={14} className="text-indigo-500" />
            <span className="truncate">{item.location}</span>
          </div>
        </div>

        {/* View Details Button - Connects to ItemDetail.jsx */}
        <button 
          onClick={() => navigate(`/item/${item._id}`)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-slate-50 text-slate-700 font-bold rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300"
        >
          <span>Details</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;