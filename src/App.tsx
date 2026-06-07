import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/header";
import { FaHome } from "react-icons/fa";
import { GrSchedules, GrConfigure } from "react-icons/gr";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { VscGraphScatter } from "react-icons/vsc";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Pacientes } from "./pages/pacientes/pacientes";
import { Relatorios } from "./pages/relatorios";
import { Configuracoes } from "./pages/configuracoes/configuracoes";
import { SignUp } from "./pages/signUp";

const buttonsHeader = [
  { name: "Início", link: "/dashboard", icon: <FaHome /> },
  { name: "Agendamentos", link: "/agendamentos", icon: <GrSchedules /> },
  { name: "Pacientes", link: "/pacientes", icon: <MdOutlinePeopleOutline /> },
  { name: "Relatórios", link: "/relatorios", icon: <VscGraphScatter /> },
  { name: "Configurações", link: "/configuracoes", icon: <GrConfigure /> },
];

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <div
          className={
            window.location.pathname === "/signUp" ? "hidden" : "block"
          }
        >
          <Header buttons={buttonsHeader} />
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/relatorios" element={<Relatorios />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
