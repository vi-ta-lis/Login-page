import { Link } from "react-router-dom";

function UserCard({ title, to }) {
  return (
    <Link
      to={to}
      className="block bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md 
                 hover:shadow-xl hover:scale-105 active:scale-95 
                 transition-transform duration-300 ease-in-out cursor-pointer
                 border border-gray-200 hover:border-blue-400"
    >
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mt-2">Click to view details →</p>
    </Link>
  );
}

export default UserCard;
