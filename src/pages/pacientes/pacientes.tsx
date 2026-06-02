import { Input } from "./pacientesComponents/input";
import { Lista } from "./pacientesComponents/lista";

export function Pacientes() {
  const pacientes = [
    {
      nome: "João Silva",
      email: "joaosilva@gmail.com",
      idade: 30,
      telefone: "(11) 98765-4321",
      ultimoAtendimento: "2024-05-15",
      proximaConsulta: "2024-06-20",
    },
    {
      nome: "Maria Santos",
      email: "mariasantos@gmail.com",
      idade: 25,
      telefone: "(11) 98765-4321",
      ultimoAtendimento: "2024-05-15",
      proximaConsulta: "2024-06-20",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold">Pacientes</h1>
      <p className="text-sm text-[#8A8FA3] mb-4">247 pacientes cadastrados</p>
      <Input />
      <Lista pacientes={pacientes} />
    </div>
  );
}
