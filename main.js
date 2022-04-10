const axios = require("axios");
const baseURL = "https://api.csycraft.xyz";
const version = require('./package.json').version;
const packagename = require('./package.json').name;

class Client {
    constructor(mainjson) {

    let logging;
    if(!mainjson.logging || mainjson.logging != true) {
        logging = false;
    } else {
        logging = true;
    }
    if(logging == true)
    console.log(`[${packagename}] Enabling..`);
        
        this.chat = function(json) {
            return new Promise(async(resolve, reject) => {
                if(!mainjson.secretkey || typeof mainjson.secretkey !== "string") return console.error("[" + packagename + "] Secret Key Problem");
                if(!mainjson.botname || typeof mainjson.secretkey !== "string") return console.error("[" + packagename + "] Bot Name Problem");
                if(!mainjson.ownername || typeof mainjson.secretkey !== "string") return console.error("[" + packagename + "] Owner Name Problem");
                
                if(!json.message || typeof json.message !== "string") reject("No message was provided");
                if(!json.user || typeof json.user !== "number") json.user = 1;
                if(!json.language || typeof json.language !== "string") json.language = "en";

                axios.get(`${baseURL}/chatbot?message=${encodeURIComponent(json.message)}&user=${encodeURIComponent(json.user)}&language=${encodeURIComponent(json.language)}&botname=${encodeURIComponent(mainjson.botname)}&ownername=${encodeURIComponent(mainjson.ownername)}`, {
                    headers: {
                        'Authorization': `${mainjson.secretkey}`,
                        'Version': `${version}`,
                        'using': "npm"
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
