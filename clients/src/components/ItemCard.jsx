import React from "react";
import { MapPin, Tag, Calendar, ChevronRight } from "lucide-react";

const ItemCard = ({ item }) => {
  const isLost = item.type === "lost";

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden">
      {/* Status Badge */}
      <div className="relative">
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10 ${
            isLost
              ? "bg-red-100 text-red-600"
              : "bg-emerald-100 text-emerald-600"
          }`}
        >
          {item.type}
        </div>

        {/* Placeholder for Image */}
        <div className="h-48 bg-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-slate-400">No Image Provided</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-800 mb-2 truncate">
          {item.title}
        </h3>

        <p className="text-slate-600 text-sm line-clamp-2 mb-4 h-10">
          {item.description}
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-slate-500 text-sm">
            <MapPin size={16} className="mr-2 text-indigo-500" />
            {item.location}
          </div>
          <div className="flex items-center text-slate-500 text-sm">
            <Tag size={16} className="mr-2 text-indigo-500" />
            {item.category}
          </div>
          <div className="flex items-center text-slate-500 text-sm">
            <Calendar size={16} className="mr-2 text-indigo-500" />
            {new Date(item.createdAt).toLocaleDateString()}
          </div>
        </div>

        <button className="w-full py-3 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center transition-colors group">
          View Details
          <ChevronRight
            size={18}
            className="ml-1 group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
