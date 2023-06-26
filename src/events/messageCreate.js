export default client => {

    const prefix = process.env.PREFIX

    client.on("messageCreate", message => {
        if (message.content.includes('fikir') || message.content.includes('fikr')) {
            message.reply(message.author.username + ' Fikir Sıçtı Koşun')
        }

        // if (command.permission && !message.member.permission.has(command.permission)) {
        //     return message.reply("Bu komutu kullanmak icin " + command.permission + " yetkisine sahip olmalisin")
        // }

        if (message.content.startsWith(prefix)) {
            const args = message.content.slice(prefix.length).trim().split(/ +/)
            const commandName = args.shift().toLowerCase()

            const command = client.commands.get(commandName)
            if (!command) {
                return
            }
            try {
                if (command.person) {
                    command.execute(message, args[0])
                }
                else {
                    command.execute(message)
                }
            } catch (error) {
                console.log(error)
                message.reply("Bu komut geçerli değil")
            }
        }
    })
}