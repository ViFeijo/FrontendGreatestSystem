import { useEffect, useState } from "react";
import api from "../services/api";

type PatientData = {
  name: string;
  birth_date: string;
  city: string;
  email: string;
};

type Patient = PatientData & {
  id: string;
};

type PatientPatch = {
  id: string;
  name?: string;
  email?: string;
  birth_date?: string;
  city?: string;
  phone?: string | null;
  address?: string | null;
  allergies?: string | null;
  blood_type?: string | null;
  cpf?: string | null;
  chronic_diseases?: string | null;
  current_medications?: string | null;
  profession?: string | null;
};

export function usePatients() {
  const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");

  const [name, setName] = useState("");
  const [onlyDoctors, setOnlyDoctors] = useState(true);
  const [patients, setPatients] = useState<Patient[]>([]);

  async function postPatients({ name, birth_date, city, email }: PatientData) {
    const response = await api.post("/patients", {
      name,
      birth_date,
      city,
      email,
    });

    return response.data;
  }

  async function getPatients() {
    const response = await api.get("/patients");
    setPatients(response.data);
    return response.data;
  }

  async function getPatientInfo(name: string) {
    const response = await api.get(`/patients/search?name=${name}`);
    setPatients(response.data);
    return response.data;
  }

  async function getPatientDoctorInfo(name: string) {
    const response = await api.get(
      `/patients/search/doctor/${doctor.id}?name=${name}`,
    );
    setPatients(response.data);
    return response.data;
  }

  async function getPatientById(id: string) {
    const response = await api.get(`/patients/${id}`);
    return response.data;
  }

  async function patchPatient(data: PatientPatch) {
    const { id, ...payload } = data;

    const response = await api.patch(`/patients/${id}`, payload);
    console.log("ANTES GET");
    console.log(data);
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...payload } : p)),
    );
    console.log("DEPOIS GET");
    const teste = await getPatients();
    console.log(teste);

    return response.data;
  }

  useEffect(() => {
    if (onlyDoctors) {
      getPatientDoctorInfo("");
    } else {
      getPatients();
    }
  }, [onlyDoctors]);

  useEffect(() => {
    if (!name) {
      if (onlyDoctors) {
        getPatientDoctorInfo("");
      } else {
        getPatients();
      }
      return;
    }

    const delay = setTimeout(() => {
      if (onlyDoctors) {
        getPatientDoctorInfo(name);
      } else {
        getPatientInfo(name);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [name, onlyDoctors]);

  return {
    getPatients,
    getPatientInfo,
    postPatients,
    patchPatient,
    patients,
    name,
    setName,
    onlyDoctors,
    setOnlyDoctors,
    getPatientById,
  };
}
