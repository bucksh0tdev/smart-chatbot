const chatbot = require("smart-chatbot");
const chatclient = new chatbot.Client({ secretkey: "SECRET KEY", botname: "BOT NAME", ownername: "OWNER NAME" });

chatclient.chat({
  message: "Hello",
  user: "SECRET USER ID",
  language: "tr" // (tr, en)
}).then(answer => console.log(answer));
