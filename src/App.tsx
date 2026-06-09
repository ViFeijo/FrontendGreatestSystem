import { BrowserRouter, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { FaHome } from "react-icons/fa";
import { GrSchedules, GrConfigure } from "react-icons/gr";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { VscGraphScatter } from "react-icons/vsc";
import { AppRoutes } from "./routes";

const buttonsHeader = [
  { name: "Início", link: "/dashboard", icon: <FaHome /> },
  { name: "Agendamentos", link: "/agendamentos", icon: <GrSchedules /> },
  { name: "Pacientes", link: "/pacientes", icon: <MdOutlinePeopleOutline /> },
  { name: "Relatórios", link: "/relatorios", icon: <VscGraphScatter /> },
  { name: "Configurações", link: "/configuracoes", icon: <GrConfigure /> },
];

function AppContent() {
  const location = useLocation();

  const hideHeader =
    location.pathname === "/login" || location.pathname === "/signUp";

  return (
    <div className="flex h-screen">
      {!hideHeader && <Header buttons={buttonsHeader} />}

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <AppRoutes />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
