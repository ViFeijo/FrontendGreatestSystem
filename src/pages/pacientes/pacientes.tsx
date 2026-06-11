import { Input } from "../../components/input";
import { usePatients } from "../../hooks/usePatients";
import { PatientsList } from "./pacientesComponents/lista";

export function Pacientes() {
  const { patients, name, setName } = usePatients();
  console.log(patients);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Pacientes</h1>

      <p className="text-sm text-[#8A8FA3] mb-4">
        {patients.length} pacientes cadastrados
      </p>

      <Input
        divide={true}
        placeholder="Buscar paciente..."
        value={name}
        onChange={setName}
      />

      <PatientsList patients={patients} />
    </div>
  );
}
