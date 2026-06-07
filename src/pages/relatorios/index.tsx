import { InfoRelatorio } from "./relatoriosComponents/infoRelatorio";
import { HeaderRelatorios } from "./relatoriosComponents/HeaderRelatorios";
import { HistoricoENovo } from "./relatoriosComponents/historicoRelatorios";

export function Relatorios() {
  return (
    <section className="flex flex-col h-screen w-full">
      <header>
        <HeaderRelatorios />
      </header>
      <div className="w-full">
        <div className="flex w-full">
          <HistoricoENovo />
          <div className="flex w-full">
            <hr className="w-px bg-(--border) h-screen" />
            <InfoRelatorio />
          </div>
        </div>
      </div>
    </section>
  );
}
