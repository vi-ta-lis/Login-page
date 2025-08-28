
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Fetch list of users
export async function fetchUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

// Fetch user details by ID
export async function fetchUserById(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
}
