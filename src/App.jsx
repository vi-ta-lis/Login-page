import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./pages/ErrorPage";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/useAuth";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage />}
            errorElement={ErrorPage}
          />
          <Route
            path="/main"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <PrivateRoute>
                <DetailPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
