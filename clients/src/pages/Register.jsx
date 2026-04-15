import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/authSlice";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/auth/register", data);
      dispatch(setCredentials(res.data.user)); // Store in Redux
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-black text-indigo-600 mb-6 text-center italic">
          RETRIEVO
        </h2>
        <p className="text-center text-slate-500 mb-8">
          Create an account to report items
        </p>

        <div className="space-y-4">
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}

          <input
            {...register("email", { required: "Email is required" })}
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}

          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 chars" },
            })}
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg mt-8 hover:bg-indigo-700 transition shadow-lg">
          Create Account
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-bold">
            Login
          </Link>
        </p>
        <Link
          to="/"
          className="text-slate-400 hover:text-indigo-600 text-sm font-bold flex items-center gap-2 mb-6 transition-colors"
        >
          ← Back to Home
        </Link>
      </form>
    </div>
  );
};

export default Register;
