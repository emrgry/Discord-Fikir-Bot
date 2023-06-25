export default client => {
    client.on("messageCreate", message => {
        if (message.content.includes('fikir') || message.content.includes('fikr')) {
            message.reply(message.author.username + ' Fikir Sıçtı Koşun')
        }
    })
}