import type { JSX } from "react";
import { ButtonsHeader } from "./buttonsHeader";
import { Logo } from "./logo";
import { Profile } from "./profile";
import { NewScheduling } from "./newScheduling";

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
    <div className="flex flex-col h-screen gap-4">
      <Logo />
      <hr className="w-full" />
      <Profile />
      <hr className="w-full" />
      <ButtonsHeader buttons={buttons} />
      <NewScheduling />
    </div>
  );
}
