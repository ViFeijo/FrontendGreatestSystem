import { useState } from "react";
import api from "../services/api";

type GetProps = {
  id: string;
};

type PostProps = {
  patient_id: string;
  doctor_id: string;
  consultation_type: string;
  date: string;
  start_time: string;
  end_time: string;
};

export function useEvolutions() {
  const [allEvo, setAllEvo] = useState([]);

  async function getEvolutionsPatient({ id }: GetProps) {
    try {
      console.log("PATIENT ID:", id);
      const response = await api.get(`/evolutions/patient/${id}`);

      console.log(response.data);
      setAllEvo(response.data);
      return response.data;
    } catch (error: any) {
      console.log("ERROR FULL:", error);
      console.log("RESPONSE:", error?.response?.data);
      console.log("STATUS:", error?.response?.status);
    }
  }

  async function postEvolution(data: PostProps) {
    const response = await api.post("/evolutions", data);

    console.log(response.data);
    return response.data;
  }

  return {
    getEvolutionsPatient,
    postEvolution,
    allEvo,
    setAllEvo,
  };
}
