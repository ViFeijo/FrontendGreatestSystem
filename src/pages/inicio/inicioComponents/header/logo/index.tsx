import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";

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
    <div className="flex items-center px-5 py-4 gap-3 border-b-2 border-[#B0B5C3]">
      <div className="w-9 h-9 bg-[#1CC88A] rounded-[10px] flex items-center justify-center">
        <img src="https://chatgpt.com/" alt="logo" className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h1 className="text-base font-bold text-[#1A1D23] leading-tight">
          GMS
        </h1>
        <h2 className="text-xs font-normal text-[#8A8FA3] leading-tight">
          Greatest Med
        </h2>
      </div>
      <div>
        <FaRegMoon onClick={mudaTema} className="text-[#8A8FA3] w-4 h-4" />
      </div>
    </div>
  );
}
