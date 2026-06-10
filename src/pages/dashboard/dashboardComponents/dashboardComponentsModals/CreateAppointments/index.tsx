import { useState } from "react";
import { Input } from "../../../../../components/input";
import { DefaultButton } from "../../../../../components/button";
import { ModalBase } from "../../../../../components/BaseModal/modal";

import { useAppointment } from "../../../hooks/useAppointments";
import { usePatients } from "../../../hooks/usePatients";

type CreateAppointmentsProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

type Patient = {
  UUID: string;
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
  const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");

  const [patientsInfo, setPatientsInfo] = useState<Patient[]>([]);
  async function showPatient() {
    const infos = await getPatientInfo(name);
    setPatientsInfo([infos.data]);
  }

  function resetError() {
    setInterval(() => {
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
  function handlePostAppointments() {
    try {
      postAppointment({
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
    <ModalBase isOpen={isOpen} onClose={toggleModal} title="Cadastrar Paciente">
      <div className="flex flex-col">
        <Input
          placeholder="Nome completo do paciente"
          mostrarLupa={false}
          value={name}
          onChange={(name) => {
            setName(name);
            showPatient();
          }}
        />

        <div>
          {patientsInfo.map((patient) => {
            return (
              <button key={patient.UUID} value={patient.UUID} className="flex">
                {patient.name}
              </button>
            );
          })}
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
          placeholder="Nome da cidade"
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
          placeholder="A consulta começa às:"
          mostrarLupa={false}
          value={endTime}
          onChange={setEndTime}
        />
      </div>
      <div className="flex justify-center m-[0.5em]">
        <DefaultButton
          buttonText="Salvar paciente"
          onClick={verifyLength}
          size={"modal"}
        />
      </div>
      <p className="text-(--error)">{errorMessage}</p>
    </ModalBase>
  );
}
