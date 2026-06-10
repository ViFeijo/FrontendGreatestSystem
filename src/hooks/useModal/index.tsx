import { useEffect, useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((open) => !open);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return {
    isOpen,
    toggleModal,
  };
}
