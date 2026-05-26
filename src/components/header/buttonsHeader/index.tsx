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
  return (
    <div className="flex flex-col gap-3 m-[1em]">
      {buttons.map((button) => (
        <div className="flex gap-2 items-center" key={button.name}>
          <p>{button.icon}</p>
          <button className="text-2x font-bold text-800">{button.name}</button>
        </div>
      ))}
    </div>
  );
}
