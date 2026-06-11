import { useState } from "react";
import { ModalBase } from "../../../../components/BaseModal/modal";
import { DefaultButton } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { useEvolutions } from "../../../../hooks/useEvolutions";

type Props = {
  id: string | undefined;
};

export function NewEvolution({ id }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { postEvolution } = useEvolutions();

  const [consultationType, setConsultationType] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");

  function resetError() {
    setTimeout(() => {
      setErrorMessage("");
    }, 4000);
  }

  function verifyFields() {
    if (!id || !consultationType || !date || !startTime || !endTime) {
      setErrorMessage("Preencha todos os campos por favor.");
      resetError();
      return;
    }

    handleSubmit();
  }

  async function handleSubmit() {
    try {
      const payload = {
        patient_id: id,
        doctor_id: doctor.id,
        consultation_type: consultationType,
        date,
        start_time: startTime,
        end_time: endTime,
      };

      console.log("PAYLOAD:", payload);

      const response = await postEvolution(payload);

      console.log(response);

      setIsOpen(false);
    } catch (error) {
      console.log(error);
      setErrorMessage("Erro ao salvar evolução.");
      resetError();
    }
  }

  return (
    <>
      <div className="w-full text-center flex flex-col items-center my-[1em]">
        <h3 className="text-(--text-primary)">HISTÓRICO DE EVOLUÇÕES</h3>

        <DefaultButton
          buttonText="+ Nova Evolução"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <ModalBase
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Nova Evolução"
      >
        <div className="flex flex-col gap-4">
          <select
            value={consultationType}
            onChange={(e) => setConsultationType(e.target.value)}
            className="w-full h-12 px-4 rounded-md border border-[var(--border)] bg-[var(--card)]"
          >
            <option value="">Selecione o tipo da consulta</option>
            <option value="primeira_consulta">Primeira consulta</option>
            <option value="retorno">Retorno</option>
            <option value="emergencia">Emergência</option>
          </select>

          <Input
            type="date"
            placeholder="Data da consulta"
            value={date}
            onChange={setDate}
          />

          <Input
            type="time"
            placeholder="Hora início"
            value={startTime}
            onChange={setStartTime}
          />

          <Input
            type="time"
            placeholder="Hora fim"
            value={endTime}
            onChange={setEndTime}
          />

          <div className="flex justify-end gap-2 mt-4">
            <DefaultButton
              buttonText="Cancelar"
              onClick={() => setIsOpen(false)}
            />

            <DefaultButton buttonText="Salvar" onClick={verifyFields} />
          </div>

          {errorMessage && (
            <p className="text-(--error) text-sm">{errorMessage}</p>
          )}
        </div>
      </ModalBase>
    </>
  );
}
