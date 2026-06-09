import type { IconType } from "react-icons";

export function DefaultButton({
  buttonText,
  buttonIcon,
  isDashboardButton,
  swappColor,
}: {
  buttonText: string;
  buttonIcon?: IconType;
  isDashboardButton?: boolean;
  swappColor?: boolean;
  onClick?: () => void;
}) {
  const Icon = buttonIcon;
  const buttonClass = `
  flex
  items-center
  gap-2
  font-semibold
  cursor-pointer
  ${
    isDashboardButton
      ? "rounded-[0.5em] px-[3em] py-[0.5em] text-[1em]"
      : "text-sm rounded-full px-6 py-3"
  }
  ${
    swappColor ? "text-(--primary) bg-(--card)" : "text-(--card) bg-(--primary)"
  }
  border-[1px] border-[solid] border-(--border)
  hover:bg-(--primary-hover)
  transition-colors
  duration-150
`;

  return (
    <button className={buttonClass}>
      {Icon ? <Icon /> : null}
      {buttonText}
    </button>
  );
}
