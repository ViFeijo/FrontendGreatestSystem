import api from "../../../services/api";

type UseLoginProp = {
  email: string;
  password: string;
};

export function useLogin() {
  function login({ email, password }: UseLoginProp) {
    try {
      api.post("/auth/doctor/login", {
        email: email,
        password: password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return { login };
}
