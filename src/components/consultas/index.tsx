type Consulta = {
  horario: string;
  nome: string;
  situacao: string;
  status: string;
};

type Props = {
  consultas: Consulta[];
};

export function ConsultasAgendadas({ consultas }: Props) {
  return (
    <div className="border border-gray-300 rounded-lg w-full">
      <div className="flex justify-between items-center px-4 py-4">
        <h3 className="text-lg font-semibold text-black">Consultas de hoje</h3>
        <button className="text-sm text-cyan-500 font-medium">
          <a href="#" className="text-cyan-500 hover:text-cyan-700">
            Ver todas &rsaquo;
          </a>
        </button>
      </div>

      {consultas.map((consulta, index) => (
        <div
          key={index}
          className="flex items-center gap-3 px-4 py-3 border-t border-gray-300"
        >
          <span className="text-sm text-gray-500 w-10 shrink-0">
            {consulta.horario}
          </span>

          <span className="text-sm font-bold text-gray-900 flex-1">
            {consulta.nome}
          </span>

          <span
            className={
              consulta.situacao === "Urgência"
                ? "text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
                : consulta.situacao === "Primeira consulta"
                  ? "text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                  : "text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700"
            }
          >
            {consulta.situacao}
          </span>

          <span
            className={
              consulta.status === "Confirmada"
                ? "text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700"
                : "text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
            }
          >
            {consulta.status}
          </span>
        </div>
      ))}
    </div>
  );
}
