export const goodbay = async (bot, chatId, chatTitle, msg) => {
  if (msg.left_chat_member != undefined) {
    bot.sendMessage(
      chatId,
      `Espero que nos veamos pronto ${msg.left_chat_member.first_name}, aquí estara ${chatTitle}`
    );
  }
};
