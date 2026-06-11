import { useState } from "react";
import { Input } from "../../../../../components/input";
import { DefaultButton } from "../../../../../components/button";
import { ModalBase } from "../../../../../components/BaseModal/modal";
import { useAppointment } from "../../../../../hooks/useAppointments";
import { usePatients } from "../../../../../hooks/usePatients";

type CreateAppointmentsProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

type Patient = {
  id: string;
  name: string;
};

export function CreateAppointmentsModal({
  isOpen,
  toggleModal,
}: CreateAppointmentsProps) {
  const postAppointment = useAppointment();
  const { getPatientInfo } = usePatients();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");

  const [patientsInfo, setPatientsInfo] = useState<Patient[]>([]);

  async function showPatient() {
    const infos = await getPatientInfo(name);
    setPatientsInfo(infos);
    setIsHidden(false);
  }

  function resetError() {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  }

  function verifyLength() {
    if (
      name.length < 3 ||
      title.length < 3 ||
      date.length < 3 ||
      startTime.length < 3 ||
      endTime.length < 3
    ) {
      setErrorMessage("Preencha todos os campos por favor.");
      resetError();
    } else {
      handlePostAppointments();
    }
  }

  async function handlePostAppointments() {
    try {
      await postAppointment({
        id,
        doctorId: doctor.id,
        title,
        date,
        startTime,
        endTime,
      });
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ModalBase isOpen={isOpen} onClose={toggleModal} title="Nova consulta">
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Input
            placeholder="Nome completo do paciente"
            mostrarLupa={false}
            value={name}
            onChange={(value) => {
              setName(value);
              if (value.length < 3) {
                setPatientsInfo([]);
                setIsHidden(true);
                return;
              }
              showPatient();
            }}
          />
          {!isHidden && patientsInfo.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-lg">
              {patientsInfo.map((patient) => (
                <button
                  key={patient.id}
                  className="w-full text-left px-4 py-2.5 text-sm text-[var(--text-primary)] hover:bg-[var(--hover)] transition-colors duration-100 border-b border-[var(--border)] last:border-0"
                  onClick={() => {
                    setName(patient.name);
                    setId(patient.id);
                    setIsHidden(true);
                  }}
                >
                  {patient.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <Input
          placeholder="ID do paciente"
          mostrarLupa={false}
          value={id}
          onChange={setId}
        />
        <Input
          placeholder="Tipo da consulta"
          mostrarLupa={false}
          value={title}
          onChange={setTitle}
        />
        <Input
          placeholder="Data da consulta"
          mostrarLupa={false}
          value={date}
          onChange={setDate}
          type="date"
        />
        <Input
          placeholder="A consulta começa às:"
          mostrarLupa={false}
          value={startTime}
          onChange={setStartTime}
        />
        <Input
          placeholder="A consulta acaba às:"
          mostrarLupa={false}
          value={endTime}
          onChange={setEndTime}
        />
      </div>

      <div className="flex justify-center m-[0.5em] mt-4">
        <DefaultButton
          buttonText="Salvar consulta"
          onClick={verifyLength}
          size={"modal"}
        />
      </div>

      <p className="text-(--error)">{errorMessage}</p>
    </ModalBase>
  );
}
