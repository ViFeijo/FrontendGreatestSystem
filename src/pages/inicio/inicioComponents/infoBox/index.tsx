export function InfoBox({
  dias,
  confirmadas,
  pacientes,
  descricao,
  aguardando,
}: {
  dias?: number;
  confirmadas?: number;
  pacientes?: number;
  aguardando?: number;
  descricao: string;
}) {
  const valor = dias ?? confirmadas ?? pacientes ?? aguardando;

  return (
    <div className="flex-1 border-1 border-[#B0B5C3] rounded-[16px] flex flex-col items-center justify-center gap-2 h-36 text-center bg-white">
      <h2 className="text-4xl font-bold text-[#1A1D23]">{valor}</h2>
      <h3 className="text-sm text-[#8A8FA3]">{descricao}</h3>
    </div>
  );
}
