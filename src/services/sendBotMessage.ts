import TelegramBot from "node-telegram-bot-api";

const token = Bun.env.TOKEN;
const chatId = Bun.env.CHAT_ID;

const bot = new TelegramBot(token, { polling: true });

export const sendBotMessage = async (
  imdbID: string,
  title: string,
  year: string,
  runtime: string,
  description: string,
  releaseDate: string,
  imdbRating: string,
  director: string,
  posterUrl: string,
) => {
  const caption = `<a href="https://www.imdb.com/title/${imdbID}">${title} (${year})</a> - ${runtime}\nRelase date - ${releaseDate}\nImdb rating - ${imdbRating}\nDirector - ${director}\n\n${description}`;

  bot
    .sendPhoto(chatId, posterUrl, {
      caption,
      parse_mode: "HTML",
    })
    .then(() => {
      console.log("Message sent successfully");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
};
