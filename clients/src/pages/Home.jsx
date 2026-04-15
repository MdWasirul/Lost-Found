import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/authSlice";
import ItemCard from "../components/ItemCard";
import API from "../api";

const Home = ({ items, loading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
      dispatch(logoutAction());
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-8 py-4 flex justify-between items-center">
        <h1 
          className="text-2xl font-black text-indigo-600 italic tracking-tighter cursor-pointer" 
          onClick={() => navigate("/")}
        >
          RETRIEVO
        </h1>

        <div className="flex gap-6 items-center">
          {isAuthenticated ? (
            // LOGGED IN STATE
            <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-full">
              <span className="text-sm font-bold text-slate-700">
                Hi, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-red-500 text-xs font-black hover:text-red-700 transition-colors"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            // GUEST STATE - NEW ORDER: REGISTER THEN LOGIN
            <div className="flex gap-5 items-center">
              <button
                onClick={() => navigate("/register")}
                className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
              >
                REGISTER
              </button>
              <button
                onClick={() => navigate("/login")}
                className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                LOGIN
              </button>
            </div>
          )}

          {/* REPORT ITEM BUTTON - ALWAYS VISIBLE BUT PROTECTED BY ROUTE */}
          <button
            onClick={() => navigate("/report")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-indigo-100 hover:scale-105 transition-all active:scale-95"
          >
            Report Item
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-6">
        <header className="mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-2">
            Community <span className="text-indigo-600">Reports</span>
          </h2>
          <p className="text-slate-500 font-medium">
            Browse lost and found items in your area.
          </p>
        </header>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-64 bg-slate-200 animate-pulse rounded-3xl"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;