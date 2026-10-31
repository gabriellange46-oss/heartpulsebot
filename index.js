const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Run this code when the bot successfully logs in
client.once('ready', () => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
});

// Listen for incoming messages
client.on('messageCreate', async (message) => {
  // Prevent loops: Ignore all bot messages
  if (message.author.bot) return;

  try {
    // React to the message with the :heartpulse: emoji (💓)
    await message.react('💓');
  } catch (error) {
    console.error('Could not add reaction:', error);
  }
});

// Log your bot in using the token from Step 1
client.login('MTU2NjAwNDk3Mjg5Njc4NDQyNw.GKwnRU.wfL1-XAiSqWYdpMH07pvMKhbcY-hPDD_XIW2bI');
