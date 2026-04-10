import { useEffect, useState } from "react";
// import axios from "axios";
import { PlusCircle, Search } from "lucide-react"; 
import ItemCard from "./components/ItemCard";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/items");
        const data = await res.json();
        console.log("Results", data);
        setItems(data);
      } catch (err) {
        console.error("Error fetching items", err);
      }
    };
    fetchItems();
  }, []);



  return (
    /* 1. MAIN WRAPPER: Attractive Background & Full Height */
    <div className="min-h-screen bg-[#f8fafc] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(99,102,241,0.08)_0,rgba(255,255,255,0)_100%)]">
      
      {/* 2. NAVBAR: Fixed at top with blur effect */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black text-indigo-600 tracking-tighter italic">
            RETRIEVO
          </h1>
          
          {/* Attractive Button with Hover Animation */}
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 hover:scale-105 active:scale-95 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-indigo-200">
            <PlusCircle size={20} />
            <span>Report Item</span>
          </button>
        </div>
      </nav>

      {/* 3. CENTERED CONTENT CONTAINER (The "Zoom Out" Protection) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Hero Section */}
        <header className="py-16 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Community Portal
          </div>
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Recent <span className="text-indigo-600 font-black">Reports</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Helping our community reunite with their lost belongings. Browse through 
            the latest items found or reported missing below.
          </p>
        </header>

        {/* 4. ITEM GRID: Responsive Columns */}
        <main className="pb-24">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-slate-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">No items found yet</h3>
              <p className="text-slate-500">Be the first to report something!</p>
            </div>
          )}
        </main>
      </div>

      {/* Footer (Optional) */}
      <Footer/>
    </div>
  );
}

export default App;