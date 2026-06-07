import { DefaultButton } from "../../../../components/button";

export function NewEvolution() {
  return (
    <div className="w-full text-center flex flex-col items-center my-[1em]">
      <h3 className="text-(--text-primary)">HISTÓRICOS DE EVOLUÇÕES</h3>
      <DefaultButton buttonText="+ Nova Evolução" />
    </div>
  );
}
