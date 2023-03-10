import TelegramBot from "node-telegram-bot-api";
import ms from "ms";

import { BOT_TOKEN } from "./configs/variables.js";
import { goodbay } from "./functions/goodbay.js";
import { welcome } from "./functions/welcome.js";
import { permissionError, executionError } from "./tools/ErrorManager.js";
import { isAdmin } from "./tools/StatusCheker.js";

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

bot.onText(/^\/ban (.+)/, async function (msg, match) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;
  var text = match[1];

  if (msg.reply_to_message == undefined) {
    return;
  }

  try {
    const data = await bot.getChatMember(chatId, userId);
    if (isAdmin(data.status)) {
      await bot.kickChatMember(chatId, replyId, {
        until_date: Math.round((Date.now() + ms(text + " days")) / 1000),
      });
      bot.deleteMessage(chatId, messageId);
      bot.sendMessage(
        chatId,
        `El usuario ${replyName} ha sido baneado durante ${text} días.`
      );
    } else {
      permissionError(bot, chatId, fromName);
    }
  } catch (err) {
    executionError(bot, chatId, fromName);
  }
});

bot.onText(/^\/unban/, async function (msg) {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  if (msg.reply_to_message == undefined) {
    return;
  }

  try {
    const data = await bot.getChatMember(chatId, userId);
    if (isAdmin(data.status)) {
      await bot.unbanChatMember(chatId, replyId);
      bot.deleteMessage(chatId, messageId);
      bot.sendMessage(chatId, `El usuario ${replyName} ha sido desbaneado`);
    } else {
      permissionError(bot, chatId, fromName);
    }
  } catch (err) {
    executionError(bot, chatId, fromName);
  }
});
