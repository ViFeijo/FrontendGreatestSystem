import { Input } from "../../../../components/input";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useRelatorios } from "../../../relatorios/hooks/useRelatorios";

export function HeaderRelatorios() {
  const { relatoriosProcurados, setRelatoriosProcurados } = useRelatorios();
  return (
    <section className="flex flex-col w-full">
      <div className="flex justify-between items-center mx-[1em] my-[0] w-100%">
        <div>
          <p className="text-(--text-primary)">Prontuário Digital</p>
        </div>
        <div className="flex mx-[1em] my-[0] gap-4">
          <Input
            placeholder="Procure os relatórios que desejar"
            value={relatoriosProcurados}
            type="text"
            onChange={setRelatoriosProcurados}
          />
          <IoIosNotificationsOutline
            size={32}
            className="text-(--text-primary)"
          />
        </div>
      </div>
      <hr className="border-t border-(--border) w-full" />
    </section>
  );
}
