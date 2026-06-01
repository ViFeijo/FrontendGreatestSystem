import { FaSearch } from "react-icons/fa";

export function Input() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 border-2 border-[#1CC88A] rounded-[12px] px-4 py-2.5 bg-white mb-5 w-full max-w-[480px]">
        <FaSearch className="text-[#1CC88A] w-4 h-4 shrink-0" />
        <input
          type="text"
          placeholder="Buscar por nome, CPF ou telefone..."
          className="flex-1 text-sm text-[#1A1D23] placeholder-[#B0B5C3] outline-none bg-transparent"
        />
      </div>
    </div>
  );
}
