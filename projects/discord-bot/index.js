require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return null;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create ")[1];
    return message.reply({
      content: "Generating Short ID for " + url,
    });
  }
  message.reply({
    content: "Hello from bot",
  });
  s;
});

client.on("interactionCreate", (interaction) => {
  //   console.log(interaction);
  interaction.reply("pong!!");
});

client.login(process.env.DISCORD_BOT_TOKEN);
