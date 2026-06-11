import api from "../services/api";

type Props = {
  pId: string;
  dId: string;
  access_type?: string;
};

export function useDoctorPatients() {
  async function postDoctorPatient({ pId, dId, access_type }: Props) {
    const access = access_type ? access_type : "emergency";
    const response = await api.post("/doctor-patients", {
      doctor_id: dId,
      patient_id: pId,
      access_type: access,
    });

    return response;
  }

  async function getDoctorPatientByDoc(dId: Props) {
    const response = await api.post(`/doctor-patients/doctor/:${dId}`);
    return response;
  }

  return { postDoctorPatient, getDoctorPatientByDoc };
}
