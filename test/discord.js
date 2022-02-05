const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL"],
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
  ]
});
const chatbot = require("smart-chatbot"); 
const chatclient = new chatbot.Client("SECRET KEY", "BOT NAME");

client.on("message", async(message) => {
  if(!message || !message.content || !message.author || message.author.bot) return;
  
  if (message.content.startsWith(`<@${client.user.id}>`) || message.content.startsWith(`<@!${client.user.id}>`)) {
       let args = message.content.split(" ").slice(1);
       let soru = args.slice(0).join(' ');

       let reply = await chatclient.chat({ 
          message: soru, 
          user: message.author.id,
          language: "tr" // (tr, en)
        });
     message.channel.send(reply);
  }
});

client.login("SECRET DISCORD BOT TOKEN");