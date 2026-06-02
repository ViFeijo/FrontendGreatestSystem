import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./pages/inicio/inicioComponents/header";
import { FaHome } from "react-icons/fa";
import { GrSchedules, GrConfigure } from "react-icons/gr";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { VscGraphScatter } from "react-icons/vsc";
import { Inicio } from "./pages/inicio/inicio";
import { Pacientes } from "./pages/pacientes/pacientes";
import { Relatorios } from "./pages/relatorios";
import { Configuracoes } from "./pages/configuracoes/configuracoes";

const buttonsHeader = [
  { name: "Início", link: "/inicio", icon: <FaHome /> },
  { name: "Agendamentos", link: "/agendamentos", icon: <GrSchedules /> },
  { name: "Pacientes", link: "/pacientes", icon: <MdOutlinePeopleOutline /> },
  { name: "Relatórios", link: "/relatorios", icon: <VscGraphScatter /> },
  { name: "Configurações", link: "/configuracoes", icon: <GrConfigure /> },
];

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-[#F7F8FA]">
        <Header buttons={buttonsHeader} />
        <div className="flex-1 overflow-y-auto px-10 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Inicio />} />
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
