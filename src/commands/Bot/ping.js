import {EmbedBuilder} from "discord.js"

export default {
    name: "ping",
    execute(message) {
        console.log("test")
        const discord_ping = message.client.ws.ping
        const bot_ping = Date.now() - message.createdTimestamp
        
        const response = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle("Ping")
            .setAuthor({ name: 'Fikir', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .addFields(
            {name:"Discord Gecikmesi", value:discord_ping.toString() + " ms", inline:true},
            {name:"Bot Gecikmesi", value:bot_ping.toString() + " ms", inline:true},
        )
        
        message.reply({embeds:[response]})
    }
}