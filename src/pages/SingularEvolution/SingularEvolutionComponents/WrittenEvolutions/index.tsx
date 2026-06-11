import type { Evolution } from "../../../../types/evolution";

type Props = {
  evolution: Evolution;
};

export function WrittenEvolutions({ evolution }: Props) {
  return (
    <div className="border border-(--border) p-[1em] mt-[1em]">
      <h4 className="text-lg font-semibold text-(--text-primary)">
        {evolution.date}
      </h4>

      <p className="text-(--text-secondary)">
        {evolution.consultation_type.replace("_", " ")}
      </p>

      <p className="mt-2 text-(--text-primary)">
        {evolution.blocks?.[0]?.content ?? "Sem conteúdo"}
      </p>
    </div>
  );
}
