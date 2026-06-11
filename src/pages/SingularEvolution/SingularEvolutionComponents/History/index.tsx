import { useEffect, useState } from "react";
import { NewEvolution } from "../newEvolution";
import { WrittenEvolutions } from "../WrittenEvolutions";
import { useEvolutions } from "../../../../hooks/useEvolutions";

type Props = {
  id: string | undefined;
};

export function History({ id }: Props) {
  const { allEvo } = useEvolutions();
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <NewEvolution id={id} />

      <hr className="border-t border-(--border) my-4 w-full" />

      <div className="flex flex-col w-full px-4 gap-4">
        {loading ? (
          <p>Carregando...</p>
        ) : allEvo.length === 0 ? (
          <p>Nenhuma evolução encontrada.</p>
        ) : (
          allEvo.map((e) => <WrittenEvolutions key={e.id} evolution={e} />)
        )}
      </div>
    </div>
  );
}
