import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDoctorPatients } from "../../hooks/useDoctorPatients";
import { PatientCard } from "./relatoriosComponents/PatientCard";

type Patient = {
  id: string;
  name: string;
  email: string;
  phone?: string;
};

export function Evolutions() {
  const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");
  const { getDoctorPatientByDoc } = useDoctorPatients();
  const [patients, setPatients] = useState<Patient[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDoctorPatientByDoc(doctor.id).then((data) => {
      const formatted = data.map((item: any) => ({
        id: item.patient_id,
        name: item.patients.name,
        email: item.patients.email,
        phone: item.patients.phone,
      }));
      setPatients(formatted);
    });
  }, []);
  return (
    <div className="flex flex-col px-8 py-6">
      <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
        Vamos escrever a evolução de quem?
      </h1>
      <p className="text-sm text-[#8A8FA3] mt-1 mb-8">
        {patients.length} pacientes disponíveis
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onClick={() => {
              console.log(patient.id);
              navigate(`/evolucao/${patient.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
