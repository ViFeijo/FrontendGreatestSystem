import { Input } from "../../components/input";
import { Lista } from "./pacientesComponents/lista";
import { usePacientes } from "./hooks/usePacientes";

export function Pacientes() {
  const { pacientes, pacienteNome, setPacienteNome } = usePacientes();
  const totalPacientes = pacientes.length;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Pacientes</h1>
      <p className="text-sm text-[#8A8FA3] mb-4">
        {totalPacientes} pacientes cadastrados
      </p>
      <Input
        divide={true}
        placeholder="Buscar paciente..."
        value={pacienteNome}
        onChange={(nome) => setPacienteNome(nome)}
      />
      <Lista pacientes={pacientes} />
    </div>
  );
}
