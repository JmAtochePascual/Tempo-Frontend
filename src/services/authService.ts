import { isAxiosError } from "axios";
import { TAuthLogin, TAuthProfile, TAuthRegister, TAuthResponseMessage } from "../types/authType";
import { api } from "../config/axios";


// Register user
export const authRegister = async (user: TAuthRegister) => {
  try {
    const { data } = await api.post<TAuthResponseMessage>("/auth/register", user);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Ocurrió un error al intentar registrar");
  }
}

// Login user
export const authLogin = async (user: TAuthLogin) => {
  try {
    const { data } = await api.post<TAuthResponseMessage>("/auth/login", user);
    return data.message;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Ocurrió un error al intentar iniciar sesión");
  }
}

// Get current user
export const authProfile = async () => {
  try {
    const { data } = await api.get<TAuthProfile>("/auth/profile");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Ocurrió un error al intentar obtener la perfil");
  }
}