


const fs = require('fs');
const { Client, Collection, GatewayIntentBits, Partials, EmbedBuilder, Permissions } = require('discord.js');
const { token } = require('./configtoki.json');


const { Guilds, GuildMembers, MessageContent, GuildMessages } = GatewayIntentBits;


const { User, Message, Channel, GuildMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages, MessageContent],
  partials: [User, Channel, Message, GuildMember],
});

const randombase2 = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
  }

const sendRandomMsgbase2 = () => {

 client.channels.cache.get('DISCORDCHANNELID').send(randomMsgbase2[randombase2(0, randomMsgbase2.length - 1)]);
}

setInterval(function () { sendRandomMsgbase2() }, 1000 * 10 * 2 );

const randomMsgbase2 = ['0', '1']

client.on('messageCreate', (Message) => {
  if (Message.channel.id == "DISCORDCHANNELID") {
      fs.appendFile('ヽ(ﾟ´Д)ﾉﾟbase2.txt', Message.content, (err) => {
          if (err) throw err;
      });
  }
})

console.log('༼ง ◉ _ ◉༽ง');
client.login(token);
