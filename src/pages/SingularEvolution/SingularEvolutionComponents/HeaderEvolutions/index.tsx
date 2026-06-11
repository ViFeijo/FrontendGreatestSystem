import { Input } from "../../../../components/input";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from "react";

export function HeaderEvolutions() {
  const [search, setSearch] = useState("");

  return (
    <section className="flex flex-col w-full">
      <div className="flex justify-between items-center mx-[1em] my-0 w-full">
        <div>
          <p className="text-(--text-primary)">
            Prontuário Digital - Evoluções
          </p>
        </div>

        <div className="flex mx-[1em] my-0 gap-4">
          <Input
            placeholder="Buscar evoluções..."
            value={search}
            type="text"
            onChange={setSearch}
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
