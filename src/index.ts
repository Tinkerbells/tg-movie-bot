import { Elysia } from "elysia";
import { generatePrompt } from "@/helpers";
import {
  getOmdbShow,
  addShow,
  sendShowBotMessage,
  fetchCompletions,
  sendAnyBotMessage,
} from "@/services";

const app = new Elysia();

app.post("/", async ({ body }: any) => {
  let completion = await fetchCompletions(generatePrompt(body.title as string));
  if (completion.isShow) {
    let show = await getOmdbShow(completion.title);
    if (!show.imdbID) {
      completion = await fetchCompletions(generatePrompt(body.title as string));
      show = await getOmdbShow(completion.title);
    }
    sendShowBotMessage(
      show.imdbID,
      show.Title,
      show.Year,
      show.Runtime,
      show.Plot,
      show.Released,
      show.imdbRating,
      show.Director,
      show.Poster,
    );
    addShow({
      showId: show.imdbID,
      title: show.Title,
      posterPath: show.Poster,
      releaseDate: show.Released,
      rating: show.imdbRating,
    });
  } else {
    sendAnyBotMessage(body.titie as string);
  }
});

app.listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
