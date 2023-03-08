export const permissionError = (bot, chatId, fromName) => {
  bot.sendMessage(
    chatId,
    `Lo siento ${fromName}, no tienes los permisos necesarios para esta acción`
  );
};

export const executionError = (bot, chatId, fromName) => {
  bot.sendMessage(
    chatId,
    `Lo siento ${fromName} ocurrió un error, intentelo nuevamente`
  );
};
