import api from "../../../services/api";
import { useEffect, useState } from "react";

export function useRelatorios() {
  const [relatoriosProcurados, setRelatoriosProcurados] = useState("");
  {
    /*trocar o :doctorId pelo ID real do médico */
  }
  async function fetchRelatorios(relatorios?: string) {
    try {
      const response = await api.get(
        `relatorios?/evolutions/patient/:${relatorios}: /evolutions/doctor/:doctorId`,
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar relatórios:", error);
      return [];
    }
  }
  useEffect(() => {
    fetchRelatorios();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchRelatorios(relatoriosProcurados);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [relatoriosProcurados]);
  return { relatoriosProcurados, setRelatoriosProcurados };
}
