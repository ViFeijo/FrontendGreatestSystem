import api from "../../../services/api";

type PatientData = {
  name: string;
  birth: string;
};

export function usePatients() {
  function postPatients({ name, birth }: PatientData) {
    api.post("/patients", { name, birth });
  }

  return postPatients;
}
