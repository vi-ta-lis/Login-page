import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  // simple validation: +254 followed by 9 digits
  const isValidPhone = /^\+254\d{9}$/.test(phone);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1500));

    if (phone === "+254712345678") {
      login();
      navigate("/main");
    } else {
      setError("Invalid phone number");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mt-1 mb-6">
          Login with your phone number
        </p>

        {/* Input */}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. +254712345678"
          className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 p-3 rounded-xl mb-3 outline-none transition"
        />

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center bg-red-50 py-2 rounded">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={!isValidPhone || loading}
          className={`w-full py-3 rounded-xl font-medium shadow-md transition flex items-center justify-center
            ${
              loading || !isValidPhone
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
              Logging in...
            </span>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  );
}
