export function Lista({ pacientes }: { pacientes: any[] }) {
  return (
    <div className="w-full">
      <div className="bg-white border-2 border-[#B0B5C3] rounded-[16px] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-[#B0B5C3]">
              <th className="px-4 py-3 text-left text-[#8A8FA3] font-medium">
                Nome
              </th>
              <th className="px-4 py-3 text-left text-[#8A8FA3] font-medium">
                Telefone
              </th>
              <th className="px-4 py-3 text-left text-[#8A8FA3] font-medium">
                Último atendimento
              </th>
              <th className="px-4 py-3 text-left text-[#8A8FA3] font-medium">
                Próxima consulta
              </th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((p, i) => (
              <tr
                key={i}
                className="border-b border-[#EDEEF2] hover:bg-[#F7F8FA] transition-colors"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${p.cor}`}
                    >
                      {p.iniciais}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1D23]">{p.nome}</p>
                      <p className="text-xs text-[#8A8FA3]">{p.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-[#4B5563]">{p.telefone}</td>
                <td className="px-4 py-4 text-[#4B5563]">
                  {p.ultimoAtendimento}
                </td>
                <td className="px-4 py-4 text-[#4B5563]">
                  {p.proximaConsulta}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4 py-3 text-xs text-[#8A8FA3] border-t border-[#EDEEF2]">
          Mostrando 1–{pacientes.length} de X pacientes
        </div>
      </div>
    </div>
  );
}
