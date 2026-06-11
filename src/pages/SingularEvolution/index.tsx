import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { History } from "./SingularEvolutionComponents/History";
import { HeaderEvolutions } from "./SingularEvolutionComponents/HeaderEvolutions";
import { InfoRelatorio } from "./SingularEvolutionComponents/infoRelatorio";

import { usePatients } from "../../hooks/usePatients";
import { useEvolutions } from "../../hooks/useEvolutions";

import type { Patient } from "../../types/patients";

export function PatientEvolution() {
  const { id } = useParams();
  const { getPatientById } = usePatients();
  const { getEvolutionsPatient, allEvo, setAllEvo } = useEvolutions();
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    if (!id) return;

    getEvolutionsPatient({ id }).then((response) => {
      setAllEvo(response);
    });
  }, [id]);

  useEffect(() => {
    if (!id) return;

    getPatientById(id).then((response) => {
      console.log("AAAAAAAAAAAAA" + response);
      setPatient(response);
    });
  }, [id]);

  return (
    <section className="w-full h-full">
      <HeaderEvolutions />

      <hr className="border-t border-(--border) my-4" />

      <div className="flex h-full">
        <div className="w-2/5 border-r border-(--border)">
          <History id={id} evo={allEvo} />
        </div>

        <div className="w-3/5">
          <InfoRelatorio patient={patient} evolutions={allEvo} />
        </div>
      </div>
    </section>
  );
}
