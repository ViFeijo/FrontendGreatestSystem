import api from "../../../services/api";

type Appointments = {
  id: string;
  doctorId: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
};

export function useAppointment() {
  async function postAppointment({
    id,
    doctorId,
    title,
    date,
    startTime,
    endTime,
  }: Appointments) {
    await api.post("/appointments", {
      patientId: id,
      doctorId,
      title,
      date,
      startTime,
      endTime,
    });
  }

  return postAppointment;
}
