const { REST, Routes } = require("discord.js");
// Load environment variables
require("dotenv").config();

const commands = [
  {
    name: "create",
    description: "creates a new short url",
  },
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_BOT_TOKEN
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1288723810211729482"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
