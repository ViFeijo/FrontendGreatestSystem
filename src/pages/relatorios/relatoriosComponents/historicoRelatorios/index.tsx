import { NewEvolution } from "../newEvolution";
import { RelatoriosEscritos } from "../RelatoriosEscritos";

export function HistoricoENovo() {
  return (
    <div className="flex flex-col items-start w-2/5">
      <NewEvolution />
      <hr className="border-t border-(--border) my-4 w-full" />
      <div className="flex flex-col items-start w-7.5/8 m-[1em] gap-4">
        <RelatoriosEscritos />
        <RelatoriosEscritos />
      </div>
    </div>
  );
}
