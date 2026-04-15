import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/authSlice";
import API from "../api";
import { useNavigate, Link } from "react-router-dom"; // 1. Import Link

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/auth/login", data);
      dispatch(setCredentials(res.data.user));
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-black text-indigo-600 mb-2 italic">
          RETRIEVO
        </h2>
        <p className="text-slate-500 mb-8 font-medium">Login to your account</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="Email Address"
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl mt-4 hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 active:scale-95">
            Login
          </button>
        </form>

        {/* 2. THE REGISTER LINK SECTION */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-bold hover:underline underline-offset-4"
            >
              Create one here
            </Link>
          </p>
        </div>
        <Link
          to="/"
          className="text-slate-400 hover:text-indigo-600 text-sm font-bold flex items-center gap-2 mb-6 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
