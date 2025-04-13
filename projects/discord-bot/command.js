require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "creates a new short url",
  },
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_BOT_TOKEN
);

console.log(process.env.CLIENT_ID, "fsdffsafsafsfsf");
console.log(process.env.DISCORD_BOT_TOKEN, "fsdffsafsafsfsf");

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
