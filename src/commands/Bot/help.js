import {EmbedBuilder} from "discord.js"

export default {
    name: "help",
    execute(message) {
        
        const response = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle("Help")
            .setAuthor({ name: 'Fikir', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .addFields(
                {name:"!ping", value:"discord pinginizi öğrenin!"},
                {name:"!tokatla <kisi>", value:"etiketlediğiniz kisiyi tokatlayin"},
        )
        
        message.reply({embeds:[response]})
    }
}