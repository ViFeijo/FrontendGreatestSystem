import { Navigate } from "react-router-dom";
import { isTokenValid } from "./auth-checker";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!isTokenValid()) {
    localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }

  return children;
}
