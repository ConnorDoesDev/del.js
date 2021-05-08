const Discord = require('discord.js')
const client = new Discord.Client()
const DEL = require('del.js')
const del = new DEL("auth token", "client id")

client.login("token")

client.on("ready", () => {
    console.log("ready")
    setInterval(() => {
        del.post(client.guilds.cache.size, client.shard.count) // if you're not sharding, replace `client.shard.count` with 0
    }, 600000);
})