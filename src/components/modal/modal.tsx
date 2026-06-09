import { useState } from "react";
import { Input } from "../input";
import { DefaultButton } from "../button";
import { usePatients } from "../../pages/dashboard/hooks/usePatients";

export function Modal() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const postPatients = usePatients();
  function handlePostPatients() {
    postPatients({
      name,
      birth,
    });
  }
  return (
    <section className="px-[4em] py-[4em] bg-(--card) rounded-[1em]">
      <p>Cadastre aqui um novo paciente!</p>
      <div className="flex flex-col">
        <Input
          placeholder="Nome do paciente"
          mostrarLupa={false}
          value={name}
          onChange={setName}
        />
        <Input
          placeholder="Data de nascimento do paciente"
          mostrarLupa={false}
          value={birth}
          onChange={setBirth}
        />
        <DefaultButton
          buttonText="Salvar paciente"
          onClick={handlePostPatients}
        />
      </div>
    </section>
  );
}
