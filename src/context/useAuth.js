import { useContext } from "react";
import { AuthContext } from "./AuthContext";

// Export hook separately so AuthContext file only contains components
export const useAuth = () => {
  return useContext(AuthContext);
};
