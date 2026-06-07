import type { IconType } from "react-icons";

export function InfoBox({
  dias,
  confirmadas,
  pacientes,
  descricao,
  aguardando,
  infoIcon,
}: {
  dias?: number;
  confirmadas?: number;
  pacientes?: number;
  aguardando?: number;
  descricao: string;
  infoIcon: IconType;
}) {
  const valor = dias ?? confirmadas ?? pacientes ?? aguardando;
  const InfoIcon = infoIcon;
  return (
    <>
      <div className="flex-1 rounded-[16px] flex flex-col gap-2 h-36 border border-(--border) bg-(--card)">
        <div className="ml-[2em] mt-[1em]">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            <InfoIcon />
          </h2>
          <h3 className="text-[11px] tracking-widest uppercase mt-1 text-[var(--text-secondary)]">
            {descricao}
          </h3>
          <h2 className="text-5xl font-bold mt-1 text-[var(--text-primary)]">
            {valor}
          </h2>
        </div>
      </div>
    </>
  );
}
