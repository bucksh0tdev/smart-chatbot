const x = require("./mains.js");
const xs = new x.Client("sample-api", "Bot Name");

   xs.chat({
    message: "Hello",
    user: "1",
    language: "tr"
  }).then(xx => console.log)