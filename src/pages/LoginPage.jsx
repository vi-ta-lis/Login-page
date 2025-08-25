import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (!phone.startsWith("+254")) {
      setError("Phone number must start with +254");
      return;
    }
    if (phone === "+254712345678") {
      login();
      navigate("/main");
    } else {
      setError("Invalid phone number");
    }
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
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
