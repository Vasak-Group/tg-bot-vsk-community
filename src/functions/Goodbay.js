export const goodbay = async (bot, chatId, chatTitle, msg) => {
  if (msg.left_chat_member != undefined && !msg.left_chat_member.is_bot) {
    bot.sendMessage(
      chatId,
      `Espero que nos veamos pronto ${msg.left_chat_member.first_name}, aquí estara ${chatTitle}`
    );
  }
};
