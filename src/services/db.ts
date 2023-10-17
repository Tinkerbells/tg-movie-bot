import prisma from "@/db/client";

type ShowType = {
  showId: string;
  title: string;
  posterPath: string;
  releaseDate: string;
  rating: string;
};
export const addShow = async (show: ShowType) => {
  try {
    await prisma.shows.create({
      data: {
        showId: show.showId,
        title: show.title,
        posterPath: show.posterPath,
        releaseDate: show.releaseDate,
        rating: show.rating,
      },
    });
    console.log("Show added successfully.");
  } catch (error) {
    console.error("Error adding show:", error);
    throw new Error("Failed to add show."); // Optional: Rethrow the error or handle it accordingly
  }
};
