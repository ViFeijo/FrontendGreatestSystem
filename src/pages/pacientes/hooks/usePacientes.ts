import { useEffect, useState } from "react";
import api from "../../../services/api";

export function usePacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteNome, setPacienteNome] = useState("");

  async function fetchPacientes(name?: string) {
    try {
      const response = await api.get(
        name ? `/patients/search?name=${name}` : "/patients",
      );
      setPacientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPacientes();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchPacientes(pacienteNome);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [pacienteNome]);

  return { pacientes, pacienteNome, setPacienteNome, fetchPacientes };
}
