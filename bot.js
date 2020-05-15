const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
let channel =     client.channels.get("710241094876659742")
setInterval(function() {
channel.send(`3mk ma7moud yad`);
}, 30)
})

client.login(process.env.BOT_TOKEN);