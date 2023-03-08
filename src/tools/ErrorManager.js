export const permissionError = (bot, chatId, fromName) => {
  bot.sendMessage(
    chatId,
    `Lo siento ${fromName}, no tienes los permisos necesarios para esta acción`
  );
};
