import { Link } from "react-router-dom";

function ErrorPage({ code = 404, message = "Page Not Found" }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-red-600">{code}</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">{message}</p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-red-600 text-white rounded-2xl shadow hover:bg-red-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
