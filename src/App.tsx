import { Header } from "./components/header";
import { FaHome } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { VscGraphScatter } from "react-icons/vsc";
import { GrConfigure } from "react-icons/gr";

function App() {
  const buttonsHeader = [
    {
      name: "Início",
      link: "/inicio",
      icon: <FaHome />,
    },
    {
      name: "Agendamentos",
      link: "/agendamentos",
      icon: <GrSchedules />,
    },
    {
      name: "Pacientes",
      link: "/pacientes",
      icon: <MdOutlinePeopleOutline />,
    },
    {
      name: "Relatórios",
      link: "/relatorios",
      icon: <VscGraphScatter />,
    },
    {
      name: "Configurações",
      link: "/configuracoes",
      icon: <GrConfigure />,
    },
  ];
  return (
    <div className="flex display flex">
      <section className="w-72 bg-[#36D6B3] bg-[linear-gradient(123deg,rgba(54,214,179,1)_40%,rgba(3,161,159,1)_66%,rgba(0,158,158,1)_93%)]">
        <Header buttons={buttonsHeader} />
      </section>
    </div>
  );
}

export default App;
