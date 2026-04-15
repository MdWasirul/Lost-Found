import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCredentials, logout, setLoading } from "./redux/authSlice";
import API from "./api";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReportItem from "./pages/ReportItem";
import ItemDetail from "./pages/ItemDetail";

function App() {
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [items, setItems] = useState([]);
  const [itemsLoading, setItemsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const initApp = async () => {
      try {
        // Fetch Auth and Items in parallel
        const [authRes, itemsRes] = await Promise.allSettled([
          API.get("/auth/me"),
          API.get("/items"),
        ]);

        if (authRes.status === "fulfilled") {
          dispatch(setCredentials(authRes.value.data.user));
        } else {
          dispatch(logout());
        }

        if (itemsRes.status === "fulfilled") {
          setItems(itemsRes.value.data);
        }
      } catch (err) {
        console.error("Initialization error", err);
      } finally {
        setItemsLoading(false);
        dispatch(setLoading(false));
      }
    };
    initApp();
  }, [dispatch]);

  if (authLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
      </div>
    );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home items={items} loading={itemsLoading} />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/report"
          element={user ? <ReportItem /> : <Navigate to="/login" />}
        />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
