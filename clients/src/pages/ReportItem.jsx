import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../api";

const ReportItem = () => {
  // Extracting errors from formState
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await API.post("/items/report", data);
      alert("Reported successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message ||
          "Error reporting item. Are you logged in?",
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Report Item</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border"
      >
        {/* Item Title */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">
            Item Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            className={`w-full border p-2 rounded outline-none transition-colors ${errors.title ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-indigo-500"}`}
            placeholder="e.g. Blue Wallet"
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1 font-medium">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">
            Type
          </label>
          <select
            {...register("type")}
            className="w-full border border-slate-300 p-2 rounded outline-none focus:border-indigo-500"
          >
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </div>
        {/* Category Field - REQUIRED BY YOUR MODEL */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">
            Category
          </label>
          <select
            {...register("category", { required: "Please select a category" })}
            className={`w-full border p-2 rounded outline-none transition-colors ${errors.category ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-indigo-500"}`}
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Documents">Documents/IDs</option>
            <option value="Wallets">Wallets/Bags</option>
            <option value="Keys">Keys</option>
            <option value="Pets">Pets</option>
            <option value="Others">Others</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs mt-1 font-medium">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">
            Location
          </label>
          <input
            {...register("location", { required: "Location is required" })}
            className={`w-full border p-2 rounded outline-none transition-colors ${errors.location ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-indigo-500"}`}
            placeholder="e.g. Library 2nd Floor"
          />
          {errors.location && (
            <p className="text-red-500 text-xs mt-1 font-medium">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Please provide a description",
            })}
            className={`w-full border p-2 rounded outline-none transition-colors ${errors.description ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-indigo-500"}`}
            rows="4"
            placeholder="Describe the item (color, brand, marks)..."
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-xs mt-1 font-medium">
              {errors.description.message}
            </p>
          )}
        </div>

        <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg active:scale-95">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportItem;
