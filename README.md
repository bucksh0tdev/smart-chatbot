<p align="center"><a href="https://nodei.co/npm/smart-chatbot"><img src="https://nodei.co/npm/smart-chatbot.png"></a></p>

<p align="center"><img src="https://img.shields.io/npm/v/smart-chatbot?style=for-the-badge"> <img src="https://img.shields.io/github/repo-size/CsYBot/smart-chatbot?style=for-the-badge"> <img src="https://img.shields.io/npm/l/smart-chatbot?style=for-the-badge"> <img src="https://img.shields.io/npm/dt/smart-chatbot?style=for-the-badge"> <img src="https://img.shields.io/github/contributors/CsYBot/smart-chatbot?style=for-the-badge"> <img src="https://img.shields.io/github/package-json/dependency-version/CsYBot/smart-chatbot/axios?style=for-the-badge"> <a href="https://discord.gg/gkmwaAZQBu" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/CsYBot%20Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> </a></p>

# smart-chatbot
 
**Javascript:**
```js
const chatbot = require("smart-chatbot");
const chatclient = new chatbot.Client("SECRET KEY", "BOT NAME");

chatclient.chat({
  message: "Hello",
  user: "SECRET USER ID",
  language: "tr" // (tr, en)
}).then(answer => console.log);
```

**What is SECRET KEY?**

For Secret Key Join Server: https://discord.gg/gkmwaAZQBu