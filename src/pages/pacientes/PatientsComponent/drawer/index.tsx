import { useEffect, useState } from "react";
import { usePatients } from "../../../../hooks/usePatients";

type Patient = {
  id: string;
  name: string;
  email: string;
  birth_date: string;
  city: string;
  phone?: string | null;
  address?: string | null;
  allergies?: string | null;
  blood_type?: string | null;
  cpf?: string | null;
  chronic_diseases?: string | null;
  current_medications?: string | null;
  profession?: string | null;
};

type Props = {
  patient: Patient;
  onClose: () => void;
};

export function PatientDrawer({ patient, onClose }: Props) {
  const [form, setForm] = useState<Patient>(patient);
  const [loading, setLoading] = useState(false);
  const { patchPatient } = usePatients();

  useEffect(() => {
    setForm(patient);
  }, [patient]);

  function handleChange(field: keyof Patient, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSave() {
    if (!form.id) return;

    try {
      setLoading(true);
      await patchPatient({
        id: form.id,
        name: form.name,
        email: form.email,
        birth_date: form.birth_date,
        city: form.city,
        phone: form.phone,
        address: form.address,
        allergies: form.allergies,
        blood_type: form.blood_type,
        cpf: form.cpf,
        chronic_diseases: form.chronic_diseases,
        current_medications: form.current_medications,
        profession: form.profession,
      });
      onClose();
    } catch (err) {
      console.error("Erro ao atualizar paciente:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 flex z-50">
      <div className="flex-1 bg-black/40" onClick={onClose} />

      <div className="w-[450px] bg-[var(--card)] shadow-2xl p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Paciente</h2>
            <p className="text-xs text-[var(--text-secondary)]">
              ID: {form.id}
            </p>
          </div>

          <button onClick={onClose}>✕</button>
        </div>

        <div className="flex flex-col gap-3">
          <input
            value={form.name || ""}
            placeholder="Nome"
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <input
            value={form.email || ""}
            placeholder="Email"
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <input
            value={form.city || ""}
            placeholder="Cidade"
            onChange={(e) => handleChange("city", e.target.value)}
          />

          <input
            type="date"
            value={form.birth_date || ""}
            onChange={(e) => handleChange("birth_date", e.target.value)}
          />

          <input
            value={form.phone || ""}
            placeholder="Telefone"
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <input
            value={form.cpf || ""}
            placeholder="CPF"
            onChange={(e) => handleChange("cpf", e.target.value)}
          />

          <input
            value={form.address || ""}
            placeholder="Endereço"
            onChange={(e) => handleChange("address", e.target.value)}
          />

          <input
            value={form.profession || ""}
            placeholder="Profissão"
            onChange={(e) => handleChange("profession", e.target.value)}
          />

          <input
            value={form.blood_type || ""}
            placeholder="Tipo sanguíneo"
            onChange={(e) => handleChange("blood_type", e.target.value)}
          />

          <input
            value={form.allergies || ""}
            placeholder="Alergias"
            onChange={(e) => handleChange("allergies", e.target.value)}
          />

          <input
            value={form.chronic_diseases || ""}
            placeholder="Doenças crônicas"
            onChange={(e) => handleChange("chronic_diseases", e.target.value)}
          />

          <input
            value={form.current_medications || ""}
            placeholder="Medicamentos"
            onChange={(e) =>
              handleChange("current_medications", e.target.value)
            }
          />
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Salvando..." : "Salvar alterações"}
        </button>
      </div>
    </div>
  );
}
