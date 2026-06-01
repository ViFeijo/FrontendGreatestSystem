import { useEffect, useState } from "react";

export function Saudacoes({ nome }: { nome: string }) {
  const [data, setData] = useState(new Date());
  useEffect(() => {
    const intervalo = setInterval(() => {
      setData(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);
  return (
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-2xl font-bold">Olá {nome}</h1>
      <h2 className="text-lg text-gray-600">
        {data.toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h2>
    </div>
  );
}
