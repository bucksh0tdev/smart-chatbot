bot.command({
  name: "$alwaysExecute",
  code: `$djsEval[
    const chatbot = require("smart-chatbot")
    const chatclient = new chatbot.Client({ secretkey: "SECRET KEY", botname: "BOT NAME", ownername: "OWNER NAME" });
    let question = message.content.split(" ").slice(1).join(" ");
    if(!question || String(question) == String([])) {
      message.channel.send("❌ Please Message ❌");
    } else {
      chatclient.chat({
        message: question,
        user: message.author.id,
        language: "tr" // (tr, en)
      }).then(x => message.channel.send(x)).catch(err => message.channel.send("ERR API Problem!"));
    }]
    $onlyIf[$mentioned[1]==$clientID;]
  `
})  
