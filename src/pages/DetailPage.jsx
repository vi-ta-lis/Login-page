import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUserById } from "../services/api";

export default function DetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserById(id)
      .then(setUser)
      .catch(() => setError("Failed to load user details"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <p className="text-lg text-gray-600 animate-pulse">
          Loading details...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-200">
        <p className="text-red-600 font-medium bg-white px-4 py-2 rounded-lg shadow">
          {error}
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full transition transform hover:scale-[1.01]">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
          {user.name}
        </h1>

        {/* Info Section */}
        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">📩 Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">📞 Phone:</span> {user.phone}
          </p>
          <p>
            <span className="font-semibold">🌐 Website:</span>{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <Link
            to="/main"
            className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-600 hover:shadow-lg transition"
          >
            ← Back to Main
          </Link>
        </div>
      </div>
    </div>
  );
}
