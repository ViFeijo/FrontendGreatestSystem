import { useState } from "react";
import iconsObj from "../../assets/icons";
import { Input } from "../../components/input";
import { useLogin } from "./hook/login";
import logo from "../../assets/img/logo.png";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  function handleClick() {
    login({ email, password });
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <img src={logo}></img>
        </div>

        <div className="mt-4 px-12 py-16 border border-(--border) rounded-2xl bg-(--card) max-w-sm mx-auto">
          <p className="text-xl font-serif font-bold text-(--text-primary) mb-1">
            Criar Conta Médica
          </p>
          <p className="text-xs text-(--text-secondary) mb-6 font-light">
            Preencha seus dados para acessar a plataforma clínica.
          </p>

          <span className="text-[11px] font-medium text-(--text-auxiliary) tracking-widest uppercase mb-2 block">
            Dados pessoais(Obrigatórios)
          </span>

          <div className="flex flex-col gap-2">
            <Input
              placeholder="Digite seu email"
              mostrarLupa={false}
              icone={iconsObj.email}
              mudarBorda={true}
              value={email}
              onChange={setEmail}
              inputEmail={true}
            />
            <Input
              placeholder="Digite sua senha"
              mostrarLupa={false}
              type="password"
              icone={iconsObj.password}
              mudarBorda={true}
              value={password}
              onChange={setPassword}
            />
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-(--primary) hover:bg-(--primary-hover) text-(--primary-foreground) text-sm font-medium py-3 rounded-xl mt-5 transition-all"
          >
            Entrar na conta →
          </button>
        </div>
      </div>
    </>
  );
}
