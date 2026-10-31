const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // Make sure this is enabled in your Discord Dev Portal!
  ],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  try {
    await message.react('💓');
  } catch (error) {
    console.error('Failed to react:', error);
  }
});

// This pulls your token securely from the hidden .env file
client.login(process.env.DISCORD_TOKEN);
