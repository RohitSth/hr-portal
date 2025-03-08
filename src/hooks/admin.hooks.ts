import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api/client";
import { useAuthStore } from "@/store/auth-store";

/**
 * Custom hook that fetches all admins with pagination
 */
export const useGetAllAdmins = (page: number, limit: number) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: ["allAdmins", page, limit],
    queryFn: async () => {
      const response = await apiClient.get(
        `/hr-hub/admin/get-all?page=${page}&limit=${limit}`
      );
      return response.data;
    },
    // Don't run this query if the user isn't authenticated
    enabled: isAuthenticated,
    // Only retry once if the request fails
    retry: 1,
    // Consider data fresh for 5 minutes
    staleTime: 5 * 60 * 1000,
  });
};
