import type { IconType } from "react-icons";
import { FaSearch } from "react-icons/fa";

export function Input({
  placeholder,
  value,
  onChange,
  type,
  icone,
  divide,
  mudarBorda,
  inputEmail,
  mostrarLupa,
}: {
  placeholder: string;
  value: string;
  onChange?: (value: string) => void;
  mostrarLupa?: boolean;
  type?: string;
  icone?: IconType;
  divide?: boolean;
  mudarBorda?: boolean;
  inputEmail?: boolean;
}) {
  const Icon = icone || FaSearch;
  const inputContainerClass = `
    flex 
    items-center 
    rounded-[12px]
    px-4
    py-2.5
    gap-3
    w-full
    my-2
    ${inputEmail ? "bg-transparent" : "bg-(--input-bg)"}
    ${mudarBorda ? "border-1 border-(--border)" : "border-2 border-(--primary)"}
  `;

  return (
    <div className={divide ? "w-1/2" : "w-full"}>
      <div className={inputContainerClass}>
        {mostrarLupa && (
          <Icon
            className={`w-4 h-4 shrink-0 ${
              icone ? "text-(--text-primary)" : "text-(--primary)"
            }`}
          />
        )}
        <input
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          onChange={(tecla) => {
            if (onChange) {
              onChange(tecla.target.value);
            }
          }}
          className="flex-1 text-sm text-(--input-text) placeholder-[var(--input-placeholder)] outline-none bg-transparent"
        />
      </div>
    </div>
  );
}
