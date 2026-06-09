export function Profile() {
  const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");
  return (
    <div className="flex items-center gap-3 px-5 py-4 border-b-4 border-[#B0B5C3]">
      <div className="w-9 h-9 rounded-full bg-[#E8F9F3] flex items-center justify-center text-[#1CC88A] text-sm font-semibold">
        M
      </div>
      <div>
        <p className="text-sm font-semibold text-text-(--text-primary) leading-tight">
          {doctor.name}
        </p>
        <p className="text-xs text-[#8A8FA3] leading-tight">
          {doctor.specialty || "Médico"}
        </p>
      </div>
    </div>
  );
}
