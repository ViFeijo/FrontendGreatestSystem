import { Input } from "../../../pacientes/pacientesComponents/input";
import { IoIosNotificationsOutline } from "react-icons/io";

export function HeaderRelatorios() {
  return (
    <section>
      <div className="flex justify-between items-center mx-[1em] my-[0] w-100%">
        <div>
          <p>Prontuário Digital</p>
        </div>
        <div className="flex mx-[1em] my-[0] gap-4">
          <Input />
          <IoIosNotificationsOutline size={32} />
        </div>
      </div>
      <hr className="border-t border-gray-300 mx-[1em] my-[0]" />
    </section>
  );
}
