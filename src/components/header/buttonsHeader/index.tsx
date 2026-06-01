import { Link, useLocation } from "react-router-dom";
import type { JSX } from "react/jsx-dev-runtime";

type buttons = {
  name: string;
  link: string;
  icon: JSX.Element;
};

type HeaderProps = {
  buttons: buttons[];
};

export function ButtonsHeader({ buttons }: HeaderProps) {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-1 m-[1em]">
      {buttons.map((button) => (
        <Link
          to={button.link}
          key={button.name}
          className={`flex gap-3 items-center px-3 py-2.5 rounded-[10px] text-sm font-medium transition-colors duration-150 cursor-pointer no-underline
            ${
              pathname === button.link
                ? "bg-[#1CC88A] text-white"
                : "text-[#4B5563] hover:bg-[#1CC88A] hover:text-white"
            }`}
        >
          <span className="w-5 h-5 flex items-center justify-center">
            {button.icon}
          </span>
          {button.name}
        </Link>
      ))}
    </div>
  );
}
