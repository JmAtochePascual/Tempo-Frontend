import axios, { isAxiosError } from "axios"

type getUsersProps = {
  page: number,
  results: number
}

// Get users random
export const getUsers = async ({ page = 1, results = 10 }: getUsersProps) => {
  try {
    const URL_API = `https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`
    const { data } = await axios.get(URL_API)
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Ocurrió un error al intentar obtener el usuario");
  }
}