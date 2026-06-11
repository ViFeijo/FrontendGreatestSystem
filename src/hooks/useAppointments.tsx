import api from "../services/api";

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
      patient_id: id,
      doctor_id: doctorId,
      title,
      date,
      start_time: startTime,
      end_time: endTime,
    });
  }

  return postAppointment;
}
