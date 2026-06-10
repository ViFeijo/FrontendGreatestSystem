import type { IconType } from "react-icons";

type DefaultButtonProps = {
  buttonText: string;
  buttonIcon?: IconType;
  variant?: "primary" | "secondary";
  size?: "default" | "dashboard" | "modal";
  onClick?: () => void;
};

export function DefaultButton({
  buttonText,
  buttonIcon,
  variant = "primary",
  size = "default",
  onClick,
}: DefaultButtonProps) {
  const Icon = buttonIcon;

  const variants = {
    primary: "text-(--card) bg-(--primary)",
    secondary: "text-(--primary) bg-(--card)",
  };

  const sizes = {
    default: "text-sm rounded-full px-6 py-3",
    dashboard: "rounded-[0.5em] px-[3em] py-[0.5em] text-[1em]",
    modal: "rounded-full px-4 py-2 text-sm justify-center",
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 font-semibold cursor-pointer
        ${variants[variant]}
        ${sizes[size]}
        border-[1px] border-[solid] border-(--border)
        hover:bg-(--primary-hover)
        transition-colors duration-150
      `}
    >
      {Icon && <Icon />}
      {buttonText}
    </button>
  );
}
