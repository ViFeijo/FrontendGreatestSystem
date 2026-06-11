type Patient = {
  id: string;
  name: string;
  email: string;
  birth_date: string;
  phone: string;
};

type Props = {
  patients: Patient[];
};

export function PatientsList({ patients }: Props) {
  return (
    <section className="flex items-center justify-center min-h-screen w-full overflow-x-hidden">
      <div className="w-[90%] max-w-[1200px] h-[90vh] bg-[var(--card)] overflow-hidden rounded-[2em]">
        <table className="w-full h-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="px-6 py-4 text-left font-medium text-[var(--text-auxiliary)]">
                Nome
              </th>
              <th className="px-6 py-4 text-left font-medium text-[var(--text-auxiliary)]">
                Email
              </th>
              <th className="px-6 py-4 text-left font-medium text-[var(--text-auxiliary)]">
                Data de nascimento
              </th>
              <th className="px-6 py-4 text-left font-medium text-[var(--text-auxiliary)]">
                Telefone
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr
                key={p.id}
                className="border-b border-[var(--border)] hover:bg-[var(--hover)] transition-colors"
              >
                <td className="px-6 py-4 text-[var(--text-primary)]">
                  {p.name}
                </td>
                <td className="px-6 py-4 text-[var(--text-secondary)]">
                  {p.email}
                </td>
                <td className="px-6 py-4 text-[var(--text-secondary)]">
                  {p.birth_date}
                </td>
                <td className="px-6 py-4 text-[var(--text-secondary)]">
                  {p.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
