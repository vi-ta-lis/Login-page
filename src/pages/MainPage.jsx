import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import SearchBar from "../components/SearchBar";
import CardComponent from "../components/UserCard";

function MainPage() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();

        if (Array.isArray(data)) {
          setUsers(data);
          setFiltered(data);
        } else {
          throw new Error("Invalid data format from API");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  const handleSearch = (term) => {
    setFiltered(
      users.filter((u) => u.name?.toLowerCase().includes(term.toLowerCase()))
    );
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <p className="text-lg text-gray-600 animate-pulse">Loading users...</p>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6">
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
        User Directory
      </h1>

      {/* Search */}
      <div className="max-w-xl mx-auto">
        <SearchBar placeholder="Search users..." onSearch={handleSearch} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {filtered.map((user) => (
          <CardComponent
            key={user.id || user._id}
            title={user.name || user.fullName || "Unnamed User"}
            to={`/detail/${user.id || user._id}`}
          />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg">
            No users found. Try another search.
          </p>
        </div>
      )}
    </div>
  );
}

export default MainPage;
