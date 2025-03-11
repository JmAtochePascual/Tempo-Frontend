import { useQuery } from "@tanstack/react-query";
import { authProfile } from "../services/authService";

export const useAuth = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: authProfile,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isError,
    isLoading
  }
}