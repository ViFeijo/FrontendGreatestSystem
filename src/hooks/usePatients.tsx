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

export function usePatients() {
  const [name, setName] = useState("");
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

  async function getPatients(): Promise<Patient[]> {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    const response = await api.get("/patients");
    setPatients(response.data);
    console.log("resposta da API:", response.data);
    return response.data;
  }

  async function getPatientInfo(name: string): Promise<Patient[]> {
    const response = await api.get(`/patients/search?name=${name}`);
    setPatients(response.data);
    console.log(response.data);
    return response.data;
  }

  useEffect(() => {
    if (name) return;
    getPatients();
  }, [name]);

  useEffect(() => {
    if (!name) return;

    const delayDebounceFn = setTimeout(() => {
      getPatientInfo(name);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [name]);

  return { getPatients, getPatientInfo, postPatients, patients, name, setName };
}
