import api from "../../../services/api";

type SignUpData = {
  nome: string;
  email: string;
  senha: string;
  especialidade: string;
  crm: string;
  telefone: string;
};

export function useSignUp() {
  async function signUp({
    nome,
    email,
    senha,
    especialidade,
    crm,
    telefone,
  }: SignUpData) {
    try {
      await api.post("/doctors", {
        name: nome,
        email: email,
        password: senha,
        specialty: especialidade,
        crm: crm,
        phone: telefone,
      });
      // eslint-disable-next-line
    } catch (error: any) {
      console.log(error.response?.data);
      console.log(error.response?.status);
    }
  }

  return { signUp };
}
