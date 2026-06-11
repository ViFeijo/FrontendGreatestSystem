import { Input } from "../../../../components/input";

type Patient = {
  id: string;
  name: string;
  email: string;
  birth_date: string;
  phone: string;
  doctor_id?: string;
};

type Props = {
  patients: Patient[];
  doctorId: string;
  name: string;
  setName: (v: string) => void;
  onlyDoctors: boolean;
  setOnlyDoctors: (v: boolean) => void;
  onSelectPatient: (p: Patient) => void;
};

export function PatientsList({
  patients,
  doctorId,
  name,
  setName,
  onlyDoctors,
  setOnlyDoctors,
  onSelectPatient,
}: Props) {
  // 🔥 filtro correto: "meus pacientes"
  const visiblePatients = onlyDoctors
    ? patients.filter((p) => p.doctor_id === doctorId)
    : patients;

  return (
    <div className="mt-6 w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
        <Input
          divide={true}
          placeholder="Buscar paciente..."
          value={name}
          onChange={setName}
        />

        <label className="flex items-center gap-2 shrink-0 cursor-pointer text-sm text-[var(--text-secondary)] ml-4">
          <input
            type="checkbox"
            checked={onlyDoctors}
            onChange={(e) => setOnlyDoctors(e.target.checked)}
            className="accent-[var(--primary)] w-4 h-4 cursor-pointer"
          />
          Só os meus
        </label>
      </div>

      {/* TABLE */}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--border)] bg-[var(--hover)]">
            {["Nome", "Email", "Nascimento", "Telefone"].map((h) => (
              <th
                key={h}
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-auxiliary)]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {visiblePatients.map((p, i) => {
            const blocked = onlyDoctors && p.doctor_id !== doctorId;

            return (
              <tr
                key={p.id}
                onClick={() => {
                  if (blocked) return;
                  onSelectPatient(p);
                }}
                className={`
                  border-b border-[var(--border)] last:border-0
                  transition-colors duration-150
                  ${
                    blocked
                      ? "opacity-40 cursor-not-allowed"
                      : "cursor-pointer hover:bg-[var(--hover)]"
                  }
                  ${i % 2 === 0 ? "bg-[var(--card)]" : "bg-[var(--hover)]/40"}
                `}
              >
                <td className="px-6 py-3 font-medium text-[var(--text-primary)]">
                  {p.name}
                </td>

                <td className="px-6 py-3 text-[var(--text-secondary)]">
                  {p.email}
                </td>

                <td className="px-6 py-3 text-[var(--text-secondary)]">
                  {p.birth_date}
                </td>

                <td className="px-6 py-3 text-[var(--text-secondary)]">
                  {p.phone || "Sem telefone"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
