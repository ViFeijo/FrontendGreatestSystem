import { Input } from "../../components/input";
import iconsObj from "../../assets/icons";
import { useState } from "react";
import { useSignUp } from "./hook";

export function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [crm, setCrm] = useState("");
  const [telefone, setTelefone] = useState("");

  const { signUp } = useSignUp();

  function cadastroClique() {
    console.log({ nome, email, senha, especialidade, crm, telefone });
    signUp({ nome, email, senha, especialidade, crm, telefone });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>/*imagem aqui*/</div>

        <div className="mt-4 px-12 py-16 border border-gray-200 rounded-2xl bg-white max-w-sm mx-auto ">
          <p className="text-xl font-serif font-bold text-[#04342c] mb-1">
            Criar Conta Médica
          </p>
          <p className="text-xs text-[#5a7a71] mb-6 font-light">
            Preencha seus dados para acessar a plataforma clínica.
          </p>

          <span className="text-[11px] font-medium text-[#9fbfb7] tracking-widest uppercase mb-2 block">
            Dados pessoais(Obrigatórios)
          </span>

          <div className="flex flex-col gap-2">
            <Input
              placeholder="Digite seu nome completo"
              mostrarLupa={false}
              icone={iconsObj.person}
              mudarBorda={true}
              value={nome}
              onChange={setNome}
            />
            <Input
              placeholder="Digite seu email"
              mostrarLupa={false}
              icone={iconsObj.email}
              mudarBorda={true}
              value={email}
              onChange={setEmail}
            />
            <Input
              placeholder="Digite sua senha"
              mostrarLupa={false}
              type="password"
              icone={iconsObj.password}
              mudarBorda={true}
              value={senha}
              onChange={setSenha}
            />
          </div>

          <div className="flex items-center gap-2 my-4 flex flex-col gap-2">
            <div className="flex-1 h-px bg-[#d0e4dc]" />
            <span className="text-[11px] font-medium text-[#9fbfb7] tracking-widest uppercase whitespace-nowrap">
              Dados profissionais(Não Obrigatórios)
            </span>
            <div className="flex-1 h-px bg-[#d0e4dc]" />
          </div>

          <Input
            placeholder="Especialidade"
            mostrarLupa={false}
            icone={iconsObj.brain}
            mudarBorda={true}
            value={especialidade}
            onChange={setEspecialidade}
          />

          <div className="flex my-2">
            <Input
              placeholder="CRM"
              mostrarLupa={false}
              icone={iconsObj.stethoscope}
              divide={true}
              mudarBorda={true}
              value={crm}
              onChange={setCrm}
            />
            <Input
              placeholder="Telefone"
              mostrarLupa={false}
              type="text"
              icone={iconsObj.telephone}
              divide={true}
              mudarBorda={true}
              value={telefone}
              onChange={setTelefone}
            />
          </div>

          <button
            onClick={cadastroClique}
            className="w-full bg-[#0f6e56] hover:bg-[#085041] text-white text-sm font-medium py-3 rounded-xl mt-5 transition-all"
          >
            Criar conta →
          </button>
        </div>
      </div>
    </>
  );
}
