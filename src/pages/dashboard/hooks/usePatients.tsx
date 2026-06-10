import api from "../../../services/api";

type PatientData = {
  name: string;
  birth_date: string;
  city: string;
};

export function usePatients() {
  async function postPatients({ name, birth_date, city }: PatientData) {
    await api.post("/patients", { name, birth_date, city });
  }
  async function getPatientInfo(name: string) {
    const info = await api.get(`/patients/search?name=${name}`);
    return info;
  }
  return { getPatientInfo, postPatients };
}
