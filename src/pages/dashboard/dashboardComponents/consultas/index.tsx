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
    <div className="border border-(--border) rounded-lg w-full">
      <div className="flex justify-between items-center px-4 py-4">
        <h3 className="text-lg font-semibold text-(--text-primary)">
          Consultas de hoje
        </h3>
        <button className="text-sm font-medium">
          <a href="#" className="text-(--primary) hover:text-(--primary-hover)">
            Ver todas &rsaquo;
          </a>
        </button>
      </div>

      {consultas.map((consulta, index) => (
        <div
          key={index}
          className="flex items-center gap-3 px-4 py-3 border-t border-(--border)"
        >
          <span className="text-sm text-(--text-secondary) w-10 shrink-0">
            {consulta.horario}
          </span>

          <span className="text-sm font-bold text-(--text-primary) flex-1">
            {consulta.nome}
          </span>

          <span
            className={
              consulta.situacao === "Urgência"
                ? "text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
                : consulta.situacao === "Primeira consulta"
                  ? "text-xs font-medium px-3 py-1 rounded-full bg-(--surface) text-(--text-secondary)"
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
