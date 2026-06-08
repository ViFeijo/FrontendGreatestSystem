import { Buttons } from "../../components/header/botaoHeader";
import iconsObj from "../../assets/icons";

export function Configuracoes() {
  const configButtons = [
    { name: "Perfil", Icon: <iconsObj.person /> },
    { name: "Segurança", icon: <iconsObj.shield /> },
    { name: "Integrações", icon: <iconsObj.arrowsRotating /> },
  ];
  return (
    <div className="w-1/2">
      <h2>Configurações</h2>
      <section className="flex flex-col items-center">
        <div className="px-[4em] py-[2em] border-[1px] border-[solid] border-[var(--border)] flex flex-col mx-[2em] my-[3em]">
          <div>
            <h2>Navegação</h2>
          </div>
          <div>
            <Buttons buttons={configButtons} />
          </div>
        </div>
        <div className="px-[4em] py-[2em] border-[1px] border-[solid] border-[var(--border)] flex flex-col mx-[2em] my-[3em]">
          <div className="flex flex-col items-center">
            <img className="w-[4em] h-[4em] rounded-[1em]" src="#"></img>
            <h2>nome</h2>
            <h3>CRM: crm hipotético</h3>
            <h4>especialidade</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
