import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, logout as logoutAction } from "../redux/authSlice";
import API from "../api";

export const useHomeData = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 1. Fetch Items for the feed
        const itemRes = await API.get("/items");
        setItems(itemRes.data);

        // 2. Check if user is logged in (session persistence)
        // Only run this if we don't already have a user in Redux
        if (!user) {
          const authRes = await API.get("/auth/me");
          dispatch(setCredentials(authRes.data.user));
        }
      } catch (err) {
        // If /auth/me fails, user is just a guest
        console.log("Guest session or error fetching data",err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, user]);

  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
      dispatch(logoutAction());
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return { items, loading, user, isAuthenticated, handleLogout };
};