export function DefaultButton({ buttonProp }: { buttonProp: string }) {
  return (
    <button className="flex items-center gap-2 bg-[#1CC88A] text-white text-sm font-semibold px-6 py-3 rounded-full cursor-pointer hover:bg-[#17b37a] transition-colors duration-150">
      {buttonProp}
    </button>
  );
}
