const axios = require("axios");
const baseURL = "https://api.csycraft.xyz/chatbot?";
const version = require('./package.json').version;
const packagename = require('./package.json').name;

class Client {
    constructor(secret, botname, logging = false) {

    if(logging == true)
    console.log(`[${packagename}] Enabling..`);
        
        this.chat = function(json) {
            return new Promise(async(resolve, reject) => {

                if(!json.message || typeof json.message !== "string") reject("No message was provided");
                if(!json.user || typeof json.user !== "number") json.user = 1;
                if(!json.language || typeof json.language !== "string" || (json.language != "tr" && json.language != "en")) json.language = "en";

                let getparams = {
                	message: json.message,
                	user: json.user,
                	language: json.language
                };
                let params = new URLSearchParams(getparams).toString();

                axios.get(String(baseURL) + String(params), {
                    headers: {
                        'Authorization': `${secret}`,
                        'Version': `${version}`
                    }
                }).then(x => {
                    if(x && x.data && x.data.code && x.data.code == 200 && x.data.message) {
                        resolve(x.data.message);
                    } else {
                        if (x && x.data && x.data.code && x.data.code == 203) {
                            resolve("Please Enter Valid Secret Code.");
                        } else if (x && x.data && x.data.code && x.data.code == 205 && x.data.message) {
                            console.error(x.data.message);
                            resolve(x.data.message);
                        } else {
                            reject("No Api message was provided");
                        }
                    }
                }).catch(err => reject("Api Connection Problem"));
            })
        }
        
    if(logging == true)
    console.log(`[${packagename}] Enabled!`);
    }
}

module.exports = {
    Client: Client,
    version: version
}
