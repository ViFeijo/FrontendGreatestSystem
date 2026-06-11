type PatientCardProps = {
  patient: { id: string; name: string; email: string; phone?: string };
  onClick: () => void;
};

export function PatientCard({ patient, onClick }: PatientCardProps) {
  const initials = patient.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--hover)] transition-all duration-150 text-center group"
    >
      <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-semibold text-lg group-hover:bg-[var(--primary)]/30 transition-colors">
        {initials}
      </div>
      <div>
        <p className="text-sm font-medium text-[var(--text-primary)]">
          {patient.name}
        </p>
        <p className="text-xs text-[var(--text-secondary)] mt-0.5">
          {patient.phone || patient.email}
        </p>
      </div>
    </button>
  );
}
