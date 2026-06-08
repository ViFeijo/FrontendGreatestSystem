import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import logo from "../../../assets/img/logo.png";

export function Logo() {
  const [modoescuro, setModoEscuro] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  function mudaTema() {
    setModoEscuro(!modoescuro);
    return localStorage.setItem("theme", modoescuro ? "light" : "dark");
  }
  useEffect(() => {
    const root = document.documentElement;
    if (modoescuro) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [modoescuro]);
  return (
    <div className="flex items-center px-5 py-4 gap-3 border-b-2 border-(--border)">
      <div className="w-9 h-9 rounded-[10px] flex items-center justify-center">
        <img src={logo} alt="logo" className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h1 className="text-base font-bold text-(--text-primary) leading-tight">
          GMS
        </h1>
        <h2 className="text-xs font-normal text-(--text-secondary) leading-tight">
          Greatest Med
        </h2>
      </div>
      <div>
        <FaRegMoon
          onClick={mudaTema}
          className="text-(--text-secondary) w-4 h-4 cursor-pointer"
        />
      </div>
    </div>
  );
}
