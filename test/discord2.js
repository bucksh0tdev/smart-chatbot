const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL"],
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
  ]
});
const chatbot = require("smart-chatbot"); 
const chatclient = new chatbot.Client({ secretkey: "SECRET KEY", botname: "BOT NAME", ownername: "OWNER NAME" });

client.on("message", async(message) => {
  if(!message || !message.content || !message.author || message.author.bot) return;
  
  if (message.channel.id == "CHANNEL ID") {
       let soru = message.content;

       let reply = await chatclient.chat({ 
          message: soru, 
          user: message.author.id,
          language: "tr" // (tr, en)
        });
     message.channel.send(reply);
  }
});

client.login("SECRET DISCORD BOT TOKEN");
