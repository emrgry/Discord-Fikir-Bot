import { ActivityType, Client, Collection } from 'discord.js'
import {readdirSync} from "fs"
import 'dotenv/config'

// MESSAGE
const client = new Client({
    intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'DirectMessages', 'MessageContent'],
    presence: {activities:[{name:"Fikrediyor", type:ActivityType.Playing}]}
})



// Event Loader
readdirSync("./events").forEach(async file => {
    const event = await import('./events/'+file).then(m => m.default)
    event(client)
})


// Command Loader
client.commands = new Collection()
readdirSync("./commands").forEach(category => {
    readdirSync("./commands/" + category).forEach(async file => {
        const command = await import("./commands/" + category + "/" + file).then(m => m.default)
        client.commands.set(command.name, command)
    })
})

// console.log(process.env)
client.login(process.env.TOKEN)