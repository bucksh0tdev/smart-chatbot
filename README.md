# smart-chatbot
<a href="https://npmjs.com/package/smart-chatbot" rel="nofollow"><img src="https://img.shields.io/npm/dt/smart-chatbot.svg?style=for-the-badge" alt="npm"></a><a href="https://npmjs.com/package/smart-chatbot" rel="nofollow"><img src="https://img.shields.io/npm/v/smart-chatbot.svg?style=for-the-badge" alt="npm"></a>

**Examples:**
```js
const chatbot = require("smart-chatbot");
const chatclient = new chatbot.Client("SECRET KEY", "BOT NAME");

(async() => {
  let reply = await chatclient.chat({
    message: "Hello",
    user: "1"
  });
  console.log(reply);
});
```
<br>

**What is SECRET KEY?**

For Secret Key Join Server: https://discord.gg/gkmwaAZQBu
