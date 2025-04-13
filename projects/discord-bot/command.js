const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "creates a new short url",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTI4ODcyMzgxMDIxMTcyOTQ4Mg.G2szpp.hAb1zKBgZpxw46bS53lX_95B5bfdCV0ZJwJ74I"
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
