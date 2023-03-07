export const welcome = async (bot, chatId, chatTitle, msg) => {
  if (msg.new_chat_members != undefined) {
    bot.sendMessage(
      chatId,
      `Bienvenid@ ${msg.new_chat_member.first_name}, ${chatTitle} es el lugar ideal para vos, no te olvides de preguntarles a los administradores cualquier duda, respeta a todos por igual y cumple las reglas del grupo.
      
      https://community.vasak.net.ar/
      https://patojad.com.ar/`
    );
  }
};
