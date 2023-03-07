import TelegramBot from "node-telegram-bot-api";

import { BOT_TOKEN } from "./configs/variables.js";
import { goodbay } from "./functions/goodbay.js";
import { welcome } from "./functions/welcome.js";

const token = BOT_TOKEN;
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
