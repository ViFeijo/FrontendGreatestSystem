import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signUp";
import { Configuracoes } from "../pages/configuracoes/configuracoes";
import { Pacientes } from "../pages/pacientes/pacientes";
import { Relatorios } from "../pages/relatorios";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/configuracoes"
        element={
          <ProtectedRoute>
            <Configuracoes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pacientes"
        element={
          <ProtectedRoute>
            <Pacientes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/relatorios"
        element={
          <ProtectedRoute>
            <Relatorios />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
