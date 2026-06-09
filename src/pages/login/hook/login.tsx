import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

type UseLoginProp = {
  email: string;
  password: string;
};

export function useLogin() {
  const navigate = useNavigate();
  async function login({ email, password }: UseLoginProp) {
    try {
      const response = await api.post("/auth/doctor/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("doctor", JSON.stringify(response.data.doctor));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return { login };
}
