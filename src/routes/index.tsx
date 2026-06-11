import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signUp";
import { Configuracoes } from "../pages/configuracoes/configuracoes";
import { Pacientes } from "../pages/pacientes/pacientes";
import { Evolutions } from "../pages/relatorios";
import { PatientEvolution } from "../pages/SingularEvolution";

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
            <Evolutions />
          </ProtectedRoute>
        }
      />
      <Route
        path="/evolucao/:id"
        element={
          <ProtectedRoute>
            <PatientEvolution />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
