import TelegramBot from "node-telegram-bot-api";

import { goodbay } from "./functions/goodbay";
import { welcome } from "./functions/welcome";

const token = "YOUR_TELEGRAM_BOT_TOKEN";
const bot = new TelegramBot(token, { polling: true });

// Comprueba Actulizacion
bot.on("polling_error", function (error) {
  console.log(error);
});

// Saludo y Despedida
bot.on("message", function (msg) {
  var chatId = msg.chat.id;
  var chatTitle = msg.chat.title;

  welcome(bot, chatId, chatTitle, msg); // Saluda si entro alguien
  goodbay(bot, chatId, chatTitle, msg); // Se despide si salio alguien
});
