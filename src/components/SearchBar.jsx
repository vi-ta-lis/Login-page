// src/components/SearchBar.jsx
function SearchBar({ placeholder, onSearch }) {
  return (
    <input
      type="text"
      placeholder={placeholder || "Search..."}
      className="border rounded p-2 mb-4 w-full focus:outline-none"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
