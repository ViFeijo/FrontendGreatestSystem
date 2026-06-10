import type { ReactNode } from "react";

type ModalBaseProps = {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children: ReactNode;
};

export function ModalBase({
  isOpen,
  onClose,
  title,
  children,
}: ModalBaseProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-(--card) rounded-xl p-6 min-w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          {title && <h2 className="text-xl font-bold">{title}</h2>}

          <button className="cursor-pointer" onClick={onClose}>
            x
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
