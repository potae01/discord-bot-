const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.once('ready', () => {
  console.log('Bot Online');
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'join') {

    const channel = interaction.member.voice.channel;

    if (!channel) {
      return interaction.reply('❌ เข้าห้องเสียงก่อน');
    }

    joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });

    interaction.reply("🔊 /RealS!ckMe.connected");
  }
});

client.login("MTQ3NjIzNzg4MTk0NDA1MTgyNQ.Gpg1a7._UfE18AXJ5IhMy2-P-_5JFDudFqxqtdOvqZbU4");