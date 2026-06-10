import { useState } from "react";
import { Input } from "../../../../../components/input";
import { DefaultButton } from "../../../../../components/button";
import { usePatients } from "../../../hooks/usePatients";
import { ModalBase } from "../../../../../components/BaseModal/modal";

type CreatePatientProps = {
  isOpen: boolean;
  toggleModal: () => void;
  setPatients: () => void;
};

export function CreatePatientModal({
  isOpen,
  toggleModal,
}: CreatePatientProps) {
  const { postPatients } = usePatients();
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [city, setCity] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  function verifyLength() {
    if (!name.trim() || !birth || !city.trim()) {
      setErrorMessage("Todos os campos precisam estar preenchidos.");
      resetError();
      return;
    }

    if (name.length < 3) {
      setErrorMessage("O nome é pequeno demais.");
      resetError();
      return;
    }

    if (city.length < 3) {
      setErrorMessage("A cidade é pequena demais.");
      resetError();
      return;
    }

    handlePostPatients();
  }
  function resetError() {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  }
  async function handlePostPatients() {
    try {
      await postPatients({
        name,
        birth_date: birth,
        city,
      });
      setName("");
      setBirth("");
      setCity("");
      toggleModal();
    } catch (error: any) {
      console.log("STATUS:", error.response?.status);
      console.log("ERROR:", error.response?.data);

      setErrorMessage("Erro ao cadastrar paciente.");
      resetError();
    }
  }
  return (
    <ModalBase isOpen={isOpen} onClose={toggleModal} title="Cadastrar Paciente">
      <div className="flex flex-col">
        <Input
          placeholder="Nome do paciente"
          mostrarLupa={false}
          value={name}
          onChange={setName}
        />
        <Input
          placeholder="Nome da cidade"
          mostrarLupa={false}
          value={city}
          onChange={setCity}
        />

        <Input
          placeholder="Data de nascimento"
          mostrarLupa={false}
          value={birth}
          onChange={setBirth}
          type="date"
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
