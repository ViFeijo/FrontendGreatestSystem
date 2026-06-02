import { Saudacoes } from "./inicioComponents/saudacoes";
import { DefaultButton } from "./componentes/newScheduling";
import { InfoBox } from "./inicioComponents/infoBox";
import { ConsultasAgendadas } from "./inicioComponents/consultas";

export function Inicio() {
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
    <>
      <section className="flex justify-between items-center">
        <Saudacoes nome="Sigminha" />
        <DefaultButton buttonProp="+ Nova Consulta" />
      </section>
      <section className="flex gap-4 mt-8 w-full">
        <InfoBox dias={12} descricao="Consultas para hoje." />
        <InfoBox confirmadas={8} descricao="Consultas confirmadas." />
        <InfoBox pacientes={100} descricao="Pacientes ativos." />
        <InfoBox aguardando={5} descricao="Aguardando atendimento." />
      </section>
      <section className="mt-8 max-w-[70%]">
        <ConsultasAgendadas consultas={consultas} />
      </section>
    </>
  );
}
