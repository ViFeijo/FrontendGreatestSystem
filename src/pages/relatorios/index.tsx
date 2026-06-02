import { DefaultButton } from "../componentes/newScheduling";
import { HeaderRelatorios } from "./relatoriosComponents/HeaderRelatorios";

export function Relatorios() {
  return (
    <>
      <header>
        <HeaderRelatorios />
      </header>
      <section>
        <div>
          <h3>HISTÓRICOS DE EVOLUÇÕES</h3>
          <DefaultButton buttonProp="+ Nova Evolução" />
          <hr className="border-t border-gray-300 my-4" />
        </div>
        <div className="flex">
          <div className="border-[1px] border-[solid] border-[#dddddd] w-3/10 p-[1em]">
            <h4 className="text-lg font-semibold">2026-03-04</h4>
            <p className="text-gray-600">Consulta de retorno</p>
            <p className="mt-2 text-gray-800">
              Paciente relatou melhora significativa dos sintomas após início do
              tratamento. Prescrição de medicação mantida e orientações
              reforçadas.
            </p>
          </div>
          <div className="flex mx-[1em] my-[0]">
            <img src="#" alt="evolução" className="w-full h-auto mt-4" />
            <h3 className="text-lg font-semibold">Mariana Sigma</h3>
          </div>
        </div>
      </section>
    </>
  );
}
