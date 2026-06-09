import { Saudacoes } from "./dashboardComponents/saudacoes";
import { DefaultButton } from "../../components/button";
import { InfoBox } from "./dashboardComponents/infoBox";
import { ConsultasAgendadas } from "./dashboardComponents/consultas";
import iconsObj from "../../assets/icons";

export function Dashboard() {
  const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");
  console.log(doctor.name);
  const consultas = [
    {
      nome: "João Silva",
      horario: "10:00",
      status: "Confirmada",
      situacao: "Primeira consulta",
    },
    {
      nome: "Maria Oliveira",
      horario: "11:30",
      status: "Aguardando",
      situacao: "Urgência",
    },
    {
      nome: "Carlos Santos",
      horario: "14:00",
      status: "Confirmada",
      situacao: "Retorno",
    },
    {
      nome: "João Silva",
      horario: "10:00",
      status: "Confirmada",
      situacao: "Primeira consulta",
    },
    {
      nome: "Maria Oliveira",
      horario: "11:30",
      status: "Aguardando",
      situacao: "Urgência",
    },
    {
      nome: "Carlos Santos",
      horario: "14:00",
      status: "Confirmada",
      situacao: "Retorno",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-8 p-8 mt-5">
      <div className="flex justify-between w-full">
        <Saudacoes nome={doctor.name} />
        <div className="flex gap-4 items-end">
          <DefaultButton
            buttonIcon={iconsObj.addPerson}
            buttonText="Novo paciente"
            isDashboardButton={true}
            swappColor={true}
          />
          <DefaultButton
            buttonIcon={iconsObj.plusCircle}
            buttonText=" Nova consulta"
            isDashboardButton={true}
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
          confirmadas={2042}
          descricao="Pacientes ativos."
          infoIcon={iconsObj.activePatients}
        />
        <InfoBox
          pacientes={50}
          descricao="Prontuarios criados."
          infoIcon={iconsObj.activePatients}
        />
        <InfoBox
          aguardando={5}
          descricao="Pendente."
          infoIcon={iconsObj.clipboard}
        />
      </section>
      <section className="mt-8 max-w-[70%]">
        <ConsultasAgendadas consultas={consultas} />
      </section>
    </section>
  );
}
