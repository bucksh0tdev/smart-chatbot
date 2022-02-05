const chatbot = require("smart-chatbot");
const chatclient = new chatbot.Client("SECRET KEY", "BOT NAME");

chatclient.chat({
  message: "Hello",
  user: "SECRET USER ID",
  language: "tr" // (tr, en)
}).then(answer => console.log);
