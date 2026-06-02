import type { JSX } from "react";
import { Buttons } from "../../componentes/buttonsHeader";
import { Logo } from "./logo";
import { Profile } from "./profile";

type buttons = {
  name: string;
  link: string;
  icon: JSX.Element;
};

type HeaderProps = {
  buttons: buttons[];
};

export function Header({ buttons }: HeaderProps) {
  return (
    <div className="flex flex-col h-screen w-[240px] min-w-[240px] bg-white border-r-2 border-[#B0B5C3]">
      <Logo />
      <Profile />
      <Buttons buttons={buttons} />
    </div>
  );
}
