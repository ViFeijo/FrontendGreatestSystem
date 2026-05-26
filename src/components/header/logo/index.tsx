import { FaRegMoon } from "react-icons/fa";

export function Logo() {
  return (
    <div className="flex px-[2em] py-[1.5em] gap-1 distance--between--left--side">
      <div className="gap-1">
        <img src="https://chatgpt.com/" alt="logo" />
      </div>
      <div className="">
        <h1 className="text-2xl  font-extrabold">GMS</h1>
        <h2 className="text-1xl font-normal">GMS</h2>
      </div>
      <div className="mx-[6em] my-[0.5em]">
        <FaRegMoon />
      </div>
    </div>
  );
}
