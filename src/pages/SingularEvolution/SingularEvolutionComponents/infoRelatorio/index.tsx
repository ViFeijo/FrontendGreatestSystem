import type { Patient } from "../../../../types/patients";
import type { Evolution } from "../../../../types/evolution";

type Props = {
  patient?: Patient;
  evolutions?: Evolution[];
};

export function InfoRelatorio({ patient, evolutions = [] }: Props) {
  if (!patient) {
    return <div className="w-3/5 p-6 text-sm text-gray-500">Carregando...</div>;
  }

  const initials = patient.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const evolution = evolutions?.[0];

  return (
    <div className="w-3/5 h-full flex flex-col">
      {/* HEADER SIMPLES */}
      <div className="flex items-center gap-4 p-6">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
          {initials}
        </div>

        <h2 className="text-lg font-semibold text-(--text-primary)">
          {patient.name}
        </h2>
      </div>

      {/* ÁREA DOS BLOCOS */}
      <div className="flex-1 p-6 overflow-y-auto">
        {evolution?.blocks?.length ? (
          <div className="space-y-3">
            {evolution.blocks.map((block, index) => (
              <div key={index}>{block.content}</div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">Nenhuma evolução selecionada.</p>
        )}
      </div>
    </div>
  );
}
