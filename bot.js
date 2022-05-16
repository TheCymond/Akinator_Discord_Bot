const { Client, Intents } = require("discord.js");
const akinator = require("discord.js-akinator");
const TOKEN =
  "OTc1NzY1NjczNTI1NTI2NTI4.Gmxwnq.kuEHNWuTd2MnGLxFDJzzXjjnlqq781RjEvJR5E";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Bot is online");
});

const PREFIX = "!";

const language = "en";
const childMode = false;
const gameType = "character";
const useButtons = true;
const embedColor = "#1F1E33";

client.on("messageCreate", async (message) => {
  if (message.content.startsWith(`${PREFIX}akinator`)) {
    akinator(message, {
      language: language,
      childMode: childMode,
      gameType: gameType,
      useButtons: useButtons,
      embedColor: embedColor,
    });
  }
});

client.login(TOKEN);
