
export default {
    name: "tokatla",
    person: "kisi",
    execute(message, kisi) {
        
        message.reply(message.author.username +" " + kisi + " kisisini tokatladi." )
    }
}