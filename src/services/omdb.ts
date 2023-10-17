import { OmdbResponse } from "@/types/omdb";
import { omdbApi } from "@/api";

const api = omdbApi();

export const getOmdbShow = async (title: string) => {
  try {
    const res = await api.get<OmdbResponse>(`/?t=${title}&plot=short`);
    return res.data;
  } catch (error) {
    console.error("Error fetching OMDB show:", error);
    throw new Error("Failed to fetch OMDB show");
  }
};
