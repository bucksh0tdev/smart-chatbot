<p align="center"><a href="https://nodei.co/npm/smart-chatbot"><img src="https://nodei.co/npm/smart-chatbot.png"></a></p>

<p align="center"><img src="https://img.shields.io/npm/v/smart-chatbot?style=for-the-badge"> <img src="https://img.shields.io/github/repo-size/CsYBot/smart-chatbot?style=for-the-badge"> <img src="https://img.shields.io/npm/l/smart-chatbot?style=for-the-badge"> <img src="https://img.shields.io/npm/dt/smart-chatbot?style=for-the-badge"> <img src="https://img.shields.io/github/contributors/CsYBot/smart-chatbot?style=for-the-badge"> <img src="https://img.shields.io/github/package-json/dependency-version/CsYBot/smart-chatbot/axios?style=for-the-badge"> <a href="https://discord.gg/gkmwaAZQBu" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/CsYBot%20Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> </a></p>

# smart-chatbot
 
**Javascript:**
```js
const chatbot = require("smart-chatbot");
const chatclient = new chatbot.Client({ secretkey: "SECRET KEY", botname: "BOT NAME", ownername: "OWNER NAME" });

chatclient.chat({
  message: "Hello",
  user: "SECRET USER ID",
  language: "tr" // (tr, en)
}).then(answer => console.log(answer));
```

**Aoi.js & Dbd.js:**
```js
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
});
```

**Bdfd API (BDSCRPT 2):**
```txt
$nomention
$botTyping
$try
$httpAddHeader[Authorization;SECRET_KEY]
$httpAddHeader[Version;0.0.9]
$httpAddHeader[using;bdfd]
$httpGet[https://api.csycraft.xyz/chatbot?user=$authorID&language=tr&botname=CsYBot&message=$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;ı;i];ö;o];ğ;g];ü;u];ç;c];ş;s]]
$httpResult[message]
$catch
Üzgünüm cevap veremedim.
$endtry
$argsCheck[>1;Please Enter Message]
```

**What is SECRET KEY?**

For Secret Key Join Server: https://discord.gg/gkmwaAZQBu
