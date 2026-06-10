import { Saudacoes } from "./dashboardComponents/saudacoes";
import { DefaultButton } from "../../components/button";
import { InfoBox } from "./dashboardComponents/infoBox";
import iconsObj from "../../assets/icons";
import { CreatePatientModal } from "./dashboardComponents/dashboardComponentsModals/CreatePatientModal";

import { useState } from "react";
import { CreateAppointmentsModal } from "./dashboardComponents/dashboardComponentsModals/CreateAppointments";

export function Dashboard() {
  const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");
  const [activePatients, setActivePatients] = useState(0);
  function patientCreated() {
    setActivePatients(activePatients + 1);
  }
  const [activeModal, setActiveModal] = useState<
    "patient" | "appointment" | null
  >(null);

  return (
    <section className="flex flex-col items-start gap-8 p-8 mt-5">
      <div className="flex justify-between w-full">
        <Saudacoes nome={doctor.name} />
        <div className="flex gap-4 items-end">
          <DefaultButton
            buttonIcon={iconsObj.addPerson}
            variant={"secondary"}
            size={"dashboard"}
            buttonText="Novo paciente"
            onClick={() => setActiveModal("patient")}
          />
          <DefaultButton
            buttonIcon={iconsObj.plusCircle}
            buttonText=" Nova consulta"
            size={"dashboard"}
            onClick={() => setActiveModal("appointment")}
          />
        </div>
      </div>
      <section className="flex gap-4 mt-2 w-full">
        <InfoBox
          dias={12}
          descricao="Consultas para hoje."
          infoIcon={iconsObj.todayConsultation}
        />
        <InfoBox
          confirmadas={activePatients}
          descricao="Pacientes ativos."
          infoIcon={iconsObj.activePatients}
        />
        <InfoBox
          pacientes={100}
          descricao="Prontuarios criados."
          infoIcon={iconsObj.activePatients}
        />
        <InfoBox
          aguardando={5}
          descricao="Pendente."
          infoIcon={iconsObj.clipboard}
        />
      </section>

      {/*MODAIS*/}
      <CreatePatientModal
        isOpen={activeModal === "patient"}
        toggleModal={() => setActiveModal(null)}
        setPatients={patientCreated}
      />
      <CreateAppointmentsModal
        isOpen={activeModal === "appointment"}
        toggleModal={() => setActiveModal(null)}
      />
      {/**/}

      {/*<section className="mt-8 max-w-[70%]">
        <ConsultasAgendadas consultas={consultas} />
      </section>*/}
    </section>
  );
}
