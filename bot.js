const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("564850883616309278")
setInterval(function() {
channel.send(`اكتب هنا ااش تريد يكتب فب السبام`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
