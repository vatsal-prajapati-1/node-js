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
});

client.on("interactionCreate", (interaction) => {
  //   console.log(interaction);
  interaction.reply("pong!!");
});

client.login(
  "MTI4ODcyMzgxMDIxMTcyOTQ4Mg.G2szpp.hAb1zKBgZpxw46bS53lX_95B5bfdCV0ZJwJ74I"
);
