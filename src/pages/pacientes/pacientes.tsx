import { useState } from "react";
import { usePatients } from "../../hooks/usePatients";
import { PatientsList } from "./PatientsComponent/lista";
import { PatientDrawer } from "./PatientsComponent/drawer";

type Patient = {
  id: string;
  name: string;
  email: string;
  birth_date: string;
  phone: string;
  doctor_id?: string;
};

export function Pacientes() {
  const { patients, name, setName, onlyDoctors, setOnlyDoctors } =
    usePatients();

  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="flex flex-col px-8 py-6">
      <h1 className="text-2xl font-semibold">Pacientes</h1>

      <p className="text-sm text-[#8A8FA3] mt-1 mb-6">
        {patients.length} pacientes cadastrados
      </p>

      <PatientsList
        patients={patients}
        name={name}
        setName={setName}
        onlyDoctors={onlyDoctors}
        setOnlyDoctors={setOnlyDoctors}
        onSelectPatient={handleSelectPatient}
      />

      {selectedPatient && (
        <PatientDrawer
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}
